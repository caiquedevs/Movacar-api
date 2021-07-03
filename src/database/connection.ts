import knex from "knex";
import configuration from "../../knexfile";
import * as dotenv from "dotenv";
dotenv.config();

const enviroment = process.env.ENVIROMENT;
const connection = knex(configuration[enviroment]);

export default connection;
