 import bcrypt from 'bcryptjs'
import User from '../models/User.model.js'
import generateToken from '../config/jwt.js'

export const register=async(req ,res) =>{
 let{name,email,password}=req.body // anything come through post request we take it from req.body
 console.log(name,email,password);

 const newPassword=await bcrypt.hash(password,10);
 if(!name || !email || !password){
    return res.status(400).send('please fill all the details')
 }
  

 const user=User.create({name,email,password:newPassword});
if(user){
 const token=generateToken(User._id)

 res.cookie("token",token,{
    httpOnly:true, //prevent javascript access
    secure:process.env.NODE_ENVIRONMENT == "production", // this will work in production or now we write development in environmental variable
    sameSite:"strict",
    maxAge:7*24*60*60*1000 //we need to convert this into millisecond
 })
    res.send('hello')
}else{
    res.status(400).send('user not found')      
    console.log('user not found');
}
}

export const login=(req,res)=>{
   
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
           bcrypt.compare(req.body.password,user.password).then((isMatch)=>{
                if(isMatch){
                    const token=generateToken(user._id)
                    res.cookie("token",token)
                    res.json({status:"ok",user:token})
                }else{
                    res.json({status:"error",user:false})
                }   
            })
        }else{
            res.json({status:"error",user:false})
        }   
    })
}

export const logout=(req,res)=>{
    try{
    res.clearCookie("token","",{maxAge:1})
    res.status(200).json({message:"logout"})
}catch(error){
    return res.status(500).json(error)
}
}