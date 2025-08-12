import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export function protect(req, res, next) {
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ) {
        jwt.verify(req.headers.authorization.split(' ')[1] , 'SECRETKEY', 
        function (err, protect) {
            if(err){
                return res.status(403).json({message: "TOKEN IS INVALID"})
            }
            console.log(protect, "protect");
            User.findById(protect._id)
            .then((user)=>{
                req.user = user;
                next();
            })
        })
    }
    else {
        return res.status(404).json({ message: "TOKEN DOES NOT EXIST" })
    }
}