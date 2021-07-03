exports.up = (knex) => knex.schema.createTable('login', (table) => {
  table.string('pin').primary();
  table.string('nome').notNullable();
  table.string('email').notNullable().unique();
});

exports.down = (knex) => knex.schema.dropTable('login');
