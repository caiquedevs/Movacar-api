const jwt = require('jsonwebtoken');
const connection = require('../database/connection');

const tokenSecret = 'adaD01230A021Avb099123cpao00234';

module.exports = {
  async verify(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }

    const [, token] = authorization.split(' ');

    try {
      const dados = jwt.verify(token, tokenSecret);
      const { pin, email } = dados;

      const user = await connection('login')
        .where('pin', pin)
        .select('*')
        .first();

      if (!user) return res.status(401).json({ error: 'This user does not exist' });

      req.userId = pin;
      req.userEmail = email;

      return next();
    } catch (e) {
      return res.status(401).json({
        error: ['Token expirado ou inválido.'],
      });
    }
  },
};
