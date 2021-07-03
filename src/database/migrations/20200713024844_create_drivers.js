exports.up = (knex) => knex.schema.createTable('drivers', (table) => {
  table.string('id_driver').primary();
  table.int('travels').defaultTo(0);

  table.string('name').notNullable();
  table.string('contact').notNullable();
  table.string('cpf').notNullable();
  table.string('entrance').notNullable();
  table.string('exit').notNullable();

  table.string('pin').notNullable();
  table.foreign('pin').references('pin').inTable('login');
});

exports.down = (knex) => knex.schema.dropTable('drivers');
