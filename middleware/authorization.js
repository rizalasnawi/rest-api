const {User} = require('../models')


module.exports = {

    Admin : function (req, res, next) {
        console.log(req.decoded)
        User
        .findOne ({where : {username : req.decoded.username}})
        .then ((users) => {
            if(users.Role == 'admin') {
                next()
            } else {
                res.status(401).json({message : 'You are not a admin'})
            }

        })
        .catch((err) => {
            console.log(err)
            res.status(500).json('Error')

        })
    },

    User : function (req, res, next) {
        User
        .findOne ({where : {username : req.decoded.username}})
        .then ((users) => {
            if(users.Role != 'admin') {
                next()
            } else {
                res.status(401).json({message : 'You are not a admin'})
            }
        })
        .catch((err) => {
            res.status(500).json('Error')

        })
    }
}