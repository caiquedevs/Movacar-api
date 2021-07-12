import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("friendships", (table) => {
    table.integer("id").primary();

    table.string("companyId").notNullable();
    table.foreign("companyId").references("companyId").inTable("companies");

    table.string("driverId").notNullable();
    table.foreign("driverId").references("driverId").inTable("drivers");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("friendships");
}
