exports.up = async function (knex) {
    await knex.raw(`create extension if not exists "uuid-ossp"`);
    return knex.schema.createTable("items", function (table) {
      
      table.increments('id')
      table.string("name", 255).notNullable();
    });
  };
  
exports.down = function (knex) {
    return knex.schema.dropTable("items");
};