const authEmployee = (permissions) => {
    return(req, res ,next) => {
        const userRole = req.body.role
        if(permissions.includes(userRole)) {
            next()
        } else {
            return res.status(401).json("You dont have valid permission!")
        }
    }
};

const authDepartment = (permissions) => {
    return(req,res,next) => {
        const userRole = req.body.role
        if(permissions.includes(userRole)){
            next()
        } else {
            return res.status(401).json("You dont have valid Permission!")
        }
    };
}


module.exports = {authEmployee, authDepartment};