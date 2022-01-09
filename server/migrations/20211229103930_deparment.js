
exports.up = function(knex) {
  return knex.schema.createTable('department', (table) => {
    table.increments('id');
    table.text('department_name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('department');
};
