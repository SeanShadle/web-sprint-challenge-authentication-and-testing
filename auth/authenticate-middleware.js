const jwt = require('jsonwebtoken');
const secret = require('../api/config');

function auth(req, res, next){
  const token = req.headers.authorization;
  if(req.decodedJwt){
    next();
  } else if(token){
    jwt.verify(token, secret.jwtSecret, (err, decodedJwt) => {
      if(err){
        res.status(401).json({
          message: 'Unauthorized'
        });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
}

module.exports = auth;