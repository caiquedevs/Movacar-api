import knex from "knex";
import configuration from "../../knexfile";
import * as dotenv from "dotenv";
dotenv.config();

const enviroment = process.env.ENVIROMENT;

const connection =
  enviroment === "production"
    ? knex(configuration.production)
    : knex(configuration.development);

export default connection;
