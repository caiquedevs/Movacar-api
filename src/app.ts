import * as dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors({ origin: "https://movacar.netlify.app/" }));
routes(app);

app.get("/", (req, res) => {
  res.json("Movacar API");
});

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log("-----------------------------------------------------");
  console.log(` Servidor ativo com sucesso em: http://localhost:${port}`);
  console.log("-----------------------------------------------------");
});
