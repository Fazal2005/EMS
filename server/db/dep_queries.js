    const knex = require('./knex');

    module.exports = {
    //deparment CRUD function
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