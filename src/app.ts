import * as dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = 3333;
dotenv.config();

app.use(cors());
routes(app);

app.get("/", (req, res) => {
  res.json("Movacar API");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("-----------------------------------------------------");
  console.log(` Servidor ativo com sucesso em: http://localhost:${port}`);
  console.log("-----------------------------------------------------");
});
