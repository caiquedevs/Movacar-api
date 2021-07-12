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
    const payload = {
      postalCode: req.body.postalCode,
      address: req.body.address,
      number: req.body.number,
      complement: req.body.complement,
      city: req.body.city,
      state: req.body.state,
      date: req.body.date,
      hour: req.body.hour,
      clientName: req.body.clientName,
      clientCPF: req.body.clientCPF,
      valueReceive: req.body.valueReceive,
      description: req.body.description,
      driverName: req.body.driverName,
      companyId: req.body.companyId,
      userId: req.body.userId,
      driverId: req.body.driverId,
    };

    try {
      await connection("travels").insert(payload);
      return res.status(201).json(payload);
    } catch (error) {
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async update(req: any, res: any) {
    const { travelId } = req.params;

    const payload = {
      postalCode: req.body.postalCode,
      address: req.body.address,
      number: req.body.number,
      complement: req.body.complement,
      city: req.body.city,
      state: req.body.state,
      date: req.body.date,
      hour: req.body.hour,
      clientName: req.body.clientName,
      clientCPF: req.body.clientCPF,
      valueReceive: req.body.valueReceive,
      description: req.body.description,
      driverName: req.body.driverName,
      driverId: req.body.driverId,
    };

    try {
      await connection("travels").where("travelId", travelId).update(payload);

      return res.status(200).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async delete(req: any, res: any) {
    const { travelId } = req.params;
    try {
      await connection("travels").where("companyId", travelId).delete();
      return res.status(200).json(travelId);
    } catch (e) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async filterByDriver(req: any, res: any) {
    const { driverId } = req.query;

    try {
      const travels = await connection("travels")
        .select("*")
        .where("driverId", driverId);
      return res.status(200).json(travels);
    } catch (error) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }
}
