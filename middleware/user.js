const users = require("../users/userDb");

function validateUserId(req, res, next) {
    users.getById(req.params.id)
        .then((user) => {
            if(user){
                req.user = user;
            } else{
                res.status(400).json({message: "invalid user id"});
            }
        })
        .catch(next)
}

function validateUser(req, re, next) {
    if(!req.body.name){
        res.status(400).json({message: "missing requiered name field"})
    }

    next()
}

module.exports = {
    validateUserId,
    validateUser
}

