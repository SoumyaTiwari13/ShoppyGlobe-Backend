import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export async function registerUser(req,res){
    try{
        const {fullName,email,password} = req.body;
        const data = await User.findOne({email});
        if(data){
            return res.status(409).json({"Message" : "User Already exists"})
        }
        else{
            const newUser = await User.create({
                email,
                fullName,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({"Message":"User Created successfully"})
        }
    }
    catch(err){
        return res.status(500).json({"message":"Server error" , err})
    }
}

export async function loginUser(req,res){
    try{
        let {email,password} = req.body;
        let data = await User.findOne({email});
        if(!data){
            return res.status(404).json({"Message":"User doesnot exist"})
        }else{
            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(403).json({"Message":"Invalid Password"})
            }
            // jwt token create
            const token = jwt.sign({id: data._id}, 'SECRETKEY', {expiresIn: '1hr'});

            res.status(200).json({
                user:{
                    email: data.email,
                    fullName: data.fullName
                },
                accesstoken: token
            })
        }
    }
    catch(err){
        return res.status(500).json({"message":"Server error" , err})
    }
  }