import crypto from "crypto";
import connection from "../database/connection";

export default class DriverController {
  static async index(req: any, res: any) {
    try {
      const allDrivers = await connection("drivers").select("*");
      return res.status(200).json(allDrivers);
    } catch (error) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async create(req: any, res: any) {
    try {
      const { name, contact, cpf, entrance, exit, pin } = req.body;
      const driverId = crypto.randomBytes(5).toString("hex");
      const payload = {
        id_driver: driverId,
        name,
        contact,
        cpf,
        entrance,
        exit,
        pin,
      };

      const checksExistence = await connection("drivers")
        .where("contact", contact)
        .orWhere("cpf", cpf)
        .first();

      if (checksExistence)
        return res.status(401).json({ error: "Motorista já cadastrado" });

      await connection("drivers").insert(payload);

      return res.status(201).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async update(req: any, res: any) {
    return res.json({ msg: "UPDATE" });
  }

  static async delete(req: any, res: any) {
    return res.json({ msg: "DELETE" });
  }
}
