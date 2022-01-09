const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

const {authEmployee} = require('../middlewares/middlewares');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}
function validEmployee(employee) {
    const hasName = typeof employee.name == 'string' && employee.name.trim() !='';
    const hasMobile = !isNaN(employee.mobile);
    const hasEmail = typeof employee.email == 'string' && employee.email.trim() !='';
    const hasDesignation = typeof employee.designation == 'string' && employee.designation.trim() !='';
    const hasRole = typeof employee.role == 'string' && employee.role.trim() !='';
    const hasType = typeof employee.type == 'string' && employee.type.trim() !='';
    const hasDOJ = employee.date_of_joining.trim() !='';
   // const hasDOB = typeof employee.date_of_birth == 'date' && employee.date_of_birth.trim() !='';
    const hasAddress = typeof employee.address == 'string' && employee.address.trim() !='';
    return hasName && hasMobile && hasEmail && hasDesignation && hasRole && hasType && hasDOJ && hasAddress;
}


router.get('/', authEmployee(["user", "admin", "superAdmin"]),(req, res) => {
    queries.getAll().then(employee => {
        res.json(employee);
    });
});

router.get('/:id', isValidId, authEmployee(["user","admin","superAdmin"]),(req, res) => {
    queries.getOne(req.params.id).then(employee => {
        res.json(employee);  
    });
});

router.post('/', authEmployee(["admin","superAdmin"]),(req, res, next) => {
    if(validEmployee(req.body)) {
        queries.create(req.body).then(employee => {
            res.json(employee[0]);
        });
    } else {
        next(new Error('invalid Employee'));
    }
});

router.put('/:id', isValidId, authEmployee(["admin","superAdmin"]),(req, res, next) => {
    if(validEmployee(req.body)) {
        queries.update(req.params.id, req.body).then(employee => {
            res.json(employee);
        });
    } else {
        next(new Error('Invalid Employee'));
    }
});

router.delete('/:id', isValidId, authEmployee(["superAdmin"]),(req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        })
    });
});

module.exports = router; 