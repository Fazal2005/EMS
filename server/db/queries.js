const knex = require('./knex'); //connection

module.exports = {
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
    },
    getAll(){
        return knex('department');
    },
    getOne(id) {
        return knex('department').where('id', id).first();
    },
    create(department) {
        return knex('department').insert(department, '*');
    },
    update(id ,department) {
        return knex('department').where('id', id).update(department, '*');
    },
    delete(id) {
        return knex('department').where('id', id).del();
    }
}
