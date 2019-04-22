const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const token = req.header('x-auth-token') // get token which we created at the time on register user

    //check token
    if(!token) 
       return res.status(401).json({msg: "No token , authorization denied"}); //401 represnts not permission or unathrized person 

       try{
            //verify token
        const decode = jwt.verify(token, config.get('secretOrKey'));

        //payload
        req.user = decode;
        next();
       }
       catch(e){
        res.status(401).json({msg: "token is not valid"})
       }

    
}

// this also can be use for private route
module.exports = auth