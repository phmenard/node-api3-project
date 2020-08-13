const users = require("../posts/postDb");

function validatePost() {
    return (req, res, next) => {
        if(!req.body){
            res.status(400).json({message: "missing post data"})
        }else if(!req.body.text) {
            res.status(400).json({message: "missing requiered text field"})
        }

        next();
    }
        
    

    /*next()


    return async (req, res, next) => {
        try {
            req.user = await users.getById(req.params.id);
            next();
        } catch (err) {
            res.status(400).json({ message: "invalid user id" });
        }

    }*/
}

module.exports = {
    validatePost
}
