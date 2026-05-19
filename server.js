const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter')
const User= require('./model/User')
const dns = require('dns');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');
const db=require('./config/db');
require('dotenv').config()
dns.setServers(['8.8.8.8', '1.1.1.1']);

//middleware
app.use(express.json());
app.use(userRouter);
//-------------------------- step 2 -------------------------?
db();

app.use

//login protected midleware

const verifytoken =(req,res,next)=>{
    const token= req.headers.authorization;
    if(!token){
        return res.send("token missing");
    }
    try{
        jwt.verify(token,"secretkey");
        next();
    }catch(err){
        console.log("invalid token")
    }
}

//To read the data 
app.get("/",async(req,res)=>{
try{

    const user = await User.find();

    res.send(user);

}catch(err){
    console.log(err)
}
})


//single data read
app.get("/mobiles/:id",async(req,res)=>{

    try{
   

        const user = await User.findById(req.params.id);
       res.send(user);



    }catch(err){
    console.log(err)
}
})

//update
app.put("/mobiles/update/:id",async(req,res)=>{
  
     try{

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}

        )

        res.send(user);

     }catch(err){

     }

})


//delete 
app.delete("/mobiles/:id",async(req,res)=>{

    try{
   

        const user = await User.findByIdAndDelete(req.params.id);
       res.send("user deleted");



    }catch(err){
    console.log(err)
}
})



app.post("/register", async(req,res)=>{
    
    try{

      const {name,email,password} = req.body;

      const userExists = await User.findOne({email})

      if(userExists){
        return res.end("user already in db")
      }

      const hashpassword = await bcrypt.hash(password,13);
      console.log("hashpassword",hashpassword)


      const user = new User({
        name,
        email,
        password: hashpassword
      })

      await user.save();

    }catch(err){
        console.log(err);
    }

})


//LOGIN
app.post("/login",async(req,res) => {
    try{
        const{email,password}=req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.end("user not found");
        }
        const token = jwt.sign(
    {id:user._id},
    "secretkey",
    {expiresIn: "1h"}
   )
   res.send({
    message:"login successfully",
    token

   })
   const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();


// middleware
const verifytoken = (req,res,next)=>{

const token = req.headers.authorization;

if(!token){
    return res.send("token missing");
}

try{

    jwt.verify(token,"secretkey");
    next();

}catch(err){
    res.send("invalid token");
}

}




    }catch(err){
        console.log(err)
    }
})
app.listen(4000,()=>{
    console.log("server started")
})