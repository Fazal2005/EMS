const knex = require('./knex'); //connection

module.exports = {
    //employee CRUD function
    getAll(){
        return knex('employee');
    },
    getOne(id) {
        return knex('employee').where('id', id).first();
    },
    create(employee) {
        return knex('employee').insert(employee, '*');
    },
    update(id, employee) {
        return knex('employee').where('id', id).update(employee, '*');
    },
    delete(id) {
         return knex('employee').where('id', id).del();
    }
}
