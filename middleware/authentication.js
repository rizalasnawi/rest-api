const jwt = require('jsonwebtoken');

module.exports =  {
    Authentication : function (req, res, next) {
        console.log('masukkkkk')
        console.log(req.headers.token)
        try {
            const decoded = jwt.verify(req.headers.token, process.env.jwt);
            console.log('decoded: ',decoded)
            req.decoded = decoded
            next();
        } catch(err) {
             res.status(403).json({message : 'You are not authenticated'})
        }
    }
}