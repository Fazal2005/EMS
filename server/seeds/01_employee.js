 
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        {id: 1, name:'fazal' ,mobile:'9789898908', email:'fazalurrahman2005@gmail.com', designation:'intern', role:'web dev', department:'Development' , type:'admin', date_of_joining:'10-12-2021', date_of_birth:'8-12-2021', address:'No.5 medavakkam main road,xxxx'},
      ]);
    });
};
