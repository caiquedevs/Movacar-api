import connection from "../database/connection";

export default class UserController {
  static async index(req: any, res: any) {
    try {
      const users = await connection("users").select("*");
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async create(req: any, res: any) {
    const { name, cell, companyId } = req.body;
    const payload = { name, cell, companyId };

    try {
      const checksExistence = await connection("users")
        .where("cell", cell)
        .andWhere("companyId", companyId)
        .first();

      if (checksExistence)
        return res.status(401).json({ error: "Usuário já cadastrado" });

      await connection("users").insert(payload);

      return res.status(201).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async update(req: any, res: any) {
    const { userId } = req.params;
    const { name, cell } = req.body;

    const payload = { name, cell };

    try {
      await connection("users").where("userId", userId).update(payload);
      return res.status(200).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async delete(req: any, res: any) {
    const { userId } = req.params;
    try {
      await connection("users").where("userId", userId).delete();
      return res.status(200).json(userId);
    } catch (e) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }
}
