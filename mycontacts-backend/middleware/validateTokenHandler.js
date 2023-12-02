const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res, next) => {
    let token; 
    let authHeader = req.headers.Authorization || req.headers.authorization; 
    if (authHeader && authHeader.startsWith("Bearer")) {
        // split after the word "Bearer, use the first index in the array, which is the token"
        token = authHeader.split(" ")[1];
        // verify token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401); 
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        });

        if(!token) {
            res.status(401); 
            throw new Error("user is not authorized or token is missing");
        };
    }
});

module.exports = validateToken;