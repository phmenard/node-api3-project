const users = require("../posts/postDb");

function validatePost(req, re, next) {
    if(!req.body){
        res.status(400).json({message: "missing post data"})
    }else if(!req.body.text) {
        res.status(400).json({message: "missing requiered text field"})
    }

    next()
}

module.exports = {
    validateUser
}
