const express = require('express');

const router = express.Router();

const queries = require('../db/dep_queries');

const {authDepartment} = require('../middlewares');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}
function validDepartment(department) {
    const hasDepartmentname = typeof department.department_name == 'string' && department.department_name.trim() !='';
    return hasDepartmentname;
}


router.get('/', authDepartment(["admin","superAdmin"]),(req, res) => {
    queries.getAll().then(department => {
        res.json(department);
    });
});

router.get('/:id', isValidId, authDepartment(["admin","superAdmin"]),(req, res) => {
    queries.getOne(req.params.id).then(department => {
        res.json(department);  
    });
});

router.post('/', authDepartment(["admin","superAdmin"]),(req, res, next) => {
    if(validDepartment(req.body)) {
        queries.create(req.body).then(department => {
            res.json(department[0]);
        });
    } else {
        next(new Error('invalid Department'));
    }
});

router.put('/:id', isValidId, authDepartment(["admin","superAdmin"]),(req, res, next) => {
    if(validDepartment(req.body)) {
        queries.update(req.params.id, req.body).then(department => {
            res.json(department);
        });
    } else {
        next(new Error('Invalid Department'));
    }
});

router.delete('/:id', isValidId, authDepartment(["admin","superAdmin"]),(req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        })
    });
});

module.exports = router; 