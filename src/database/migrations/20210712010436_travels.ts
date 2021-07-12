import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("travels", (table) => {
    table.uuid("travelId").primary();

    table.string("status").defaultTo("pendente");
    table.string("postalCode").notNullable();
    table.string("address").notNullable();
    table.string("number").notNullable();
    table.string("complement").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();

    table.string("date").notNullable();
    table.string("hour").notNullable();

    table.string("clientName").notNullable();
    table.string("clientCPF").notNullable();
    table.string("valueReceive").notNullable();
    table.string("description").notNullable();
    table.string("driverName").notNullable();

    table.string("companyId").notNullable();
    table.foreign("companyId").references("companyId").inTable("companies");

    table.string("userId").notNullable();
    table.foreign("userId").references("userId").inTable("users");

    table.string("driverId").notNullable();
    table.foreign("driverId").references("driverId").inTable("drivers");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("travels");
}
