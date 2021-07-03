exports.up = (knex) => knex.schema.createTable('travels', (table) => {
  table.string('id_travel').primary();
  table.string('created').notNullable();
  table.string('status').notNullable();

  table.string('address').notNullable();
  table.string('number').notNullable();
  table.string('description').notNullable();
  table.string('date').notNullable();
  table.string('hour').notNullable();
  table.string('cep').notNullable();
  table.string('city').notNullable();
  table.string('state', 2).notNullable();

  table.string('id_driver').notNullable();
  table.string('name_driver').notNullable();

  table.string('pin').notNullable();
  table.foreign('pin').references('pin').inTable('login');
});

exports.down = (knex) => knex.schema.dropTable('travels');
