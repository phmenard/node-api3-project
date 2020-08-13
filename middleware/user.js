const users = require("../users/userDb");

function validateUserId() {
    return async (req, res, next) => {
        try {
            req.user = await users.getById(req.params.id);
            //if(!user){throw(404)}
            next();
        } catch (err) {
            res.status(400).json({ message: "invalid user id" });
        }

        next();

    }

}

function validateUser() {
    return (req, res, next) => {
        if (!req.body.name) {
            res.status(400).json({ message: "missing requiered name field" })
        }

        next()
    }
}

module.exports = {
    validateUserId,
    validateUser
}

