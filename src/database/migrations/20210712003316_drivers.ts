import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("drivers", (table) => {
    table.uuid("driverId").primary();
    table.integer("travels").defaultTo(0);
    table.string("rating").defaultTo(0);

    table.string("name");
    table.string("type");
    table.string("cell").notNullable().unique();
    table.string("cpf").unique();
    table.string("about");
    table.string("networks");
    table.string("vehicle");
    table.string("vehicleYear");
    table.string("status");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("drivers");
}
