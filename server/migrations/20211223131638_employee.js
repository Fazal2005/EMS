
  exports.up = function(knex) {
    return knex.schema.createTable('employee', (table) => {
        table.increments('id');
        table.string('name');
        table.bigInteger('mobile');
        table.string('email');
        table.string('designation');
        table.string('role');
        table.string('department');
        table.string('type');
        table.date('date_of_joining');
        table.date('date_of_birth');
        table.string('address');
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('employee');
  };
  