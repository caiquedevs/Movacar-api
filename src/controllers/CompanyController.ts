import connection from "../database/connection";

export default class CompanyController {
  static async index(req: any, res: any) {
    try {
      const companies = await connection("companies").select("*");
      return res.status(200).json(companies);
    } catch (error) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async create(req: any, res: any) {
    const { name, cell } = req.body;
    const payload = { name, cell };

    try {
      const checksExistence = await connection("companies")
        .where("cell", cell)
        .orWhere("name", name)
        .first();

      if (checksExistence)
        return res.status(401).json({ error: "Empresa já cadastrada" });

      await connection("companies").insert(payload);

      return res.status(201).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(500).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async update(req: any, res: any) {
    const { companyId } = req.params;
    const { name, cell } = req.body;

    const payload = { name, cell };

    try {
      await connection("companies")
        .where("companyId", companyId)
        .update(payload);

      return res.status(200).json(payload);
    } catch (error) {
      console.log("ERRO AQUI", error);
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }

  static async delete(req: any, res: any) {
    const { companyId } = req.params;
    try {
      await connection("companies").where("companyId", companyId).delete();
      return res.status(200).json(companyId);
    } catch (e) {
      return res.status(404).json({ msg: "Ocorreu um erro inesperado" });
    }
  }
}
