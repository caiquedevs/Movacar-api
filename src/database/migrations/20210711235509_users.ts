import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.uuid("userId").primary();
    table.string("name").notNullable();
    table.string("cell").primary();

    table.string("companyId").notNullable();
    table.foreign("companyId").references("companyId").inTable("companies");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
