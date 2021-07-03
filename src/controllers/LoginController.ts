import crypto from "crypto";
import connection from "../database/connection";

export default class LoginController {
  static async index(req: any, res: any) {
    try {
      const login = await connection("login").select("*");
      return res.status(200).json(login);
    } catch (e) {
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async create(req: any, res: any) {
    return res.json({ msg: "CREATE" });
  }

  static async update(req: any, res: any) {
    return res.json({ msg: "UPDATE" });
  }

  static async delete(req: any, res: any) {
    return res.json({ msg: "DELETE" });
  }
}
