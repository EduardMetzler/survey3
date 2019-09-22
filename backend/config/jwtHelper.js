const jwt = require('jsonwebtoken');
 
module.exports.verifyJwtToken = (req, res, next) => {
    // console.log("erferferf")
    var token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];
        // console.log('jjjjjjjjjjjjjjjjj')
        

 
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token, process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
          
                //   return res.status(200)
                        
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}