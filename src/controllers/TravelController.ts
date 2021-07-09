import crypto from "crypto";
import connection from "../database/connection";

export default class TravelController {
  static async index(req: any, res: any) {
    try {
      const login = await connection("travels").select("*");
      return res.status(200).json(login);
    } catch (e) {
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async create(req: any, res: any) {
    try {
      const {
        pin,
        address,
        number: numberAddress,
        description,
        date,
        hour,
        cep,
        city,
        state,
        id_driver,
        name_driver,
      } = req.body;

      const travelId = crypto.randomBytes(8).toString("hex");
      const dateNow = new Date();

      const payload = {
        id_travel: travelId,
        created: dateNow,
        status: "pending",
        description,
        name_driver,
        id_driver,
        address,
        number: numberAddress,
        state,
        date,
        hour,
        city,
        pin,
        cep,
      };

      await connection("travels").insert(payload);
      return res.status(201).json(payload);
    } catch (error) {
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async update(req: any, res: any) {
    return res.json({ msg: "UPDATE" });
  }

  static async delete(req: any, res: any) {
    return res.json({ msg: "DELETE" });
  }

  static async filterByDriver(req: any, res: any) {
    const { id_driver } = req.query;

    try {
      const travels = await connection("travels")
        .select("*")
        .where("id_driver", id_driver);
      return res.status(200).json(travels);
    } catch (error) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }
}
