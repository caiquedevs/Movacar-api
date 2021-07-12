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
    const { cell, cpf } = req.body;

    const payload = {
      cell,
      cpf,
      travels: req.body.travels,
      rating: req.body.rating,
      name: req.body.name,
      type: req.body.type,
      about: req.body.about,
      networks: req.body.networks,
      vehicle: req.body.vehicle,
      vehicleYear: req.body.vehicleYear,
      status: req.body.status,
    };

    try {
      const checksExistence = await connection("drivers")
        .where("cell", cell)
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
    const { driverId } = req.params;

    const payload = {
      travels: req.body.travels,
      rating: req.body.rating,
      name: req.body.name,
      type: req.body.type,
      about: req.body.about,
      networks: req.body.networks,
      vehicle: req.body.vehicle,
      vehicleYear: req.body.vehicleYear,
      status: req.body.status,
    };

    try {
      await connection("drivers").where("driverId", driverId).update(payload);
      return res.status(200).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async delete(req: any, res: any) {
    const { driverId } = req.params;
    try {
      await connection("drivers").where("driverId", driverId).delete();
      return res.status(200).json(driverId);
    } catch (e) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async filter(req: any, res: any) {
    const { value } = req.query;

    try {
      const allDrivers = await connection("drivers")
        .select("*")
        .where("cell", value);
      return res.status(200).json(allDrivers);
    } catch (error) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }
}
