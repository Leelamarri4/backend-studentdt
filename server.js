const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/User");
const dns = require('dns');
const bcrypt= require('bcrypt');

dns.setServers(['8.8.8.8', '1.1.1.1']);

//middleware
app.use(express.json());
//-------------------------- step 2 -------------------------?
mongoose.connect("mongodb+srv://leelamarri26_db_user:leela123@cluster0.pujvoey.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connected")
})

//crete the data post
app.post("/mobiles/add",async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }catch(err){
        res.send(err)
    }
})
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


app.listen(4000,()=>{
    console.log("server started")
})