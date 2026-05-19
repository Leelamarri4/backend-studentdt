const mongoose = require('mongoose');
const env = require("dotenv");

const connectdb= async () =>{

    try {
      await mongoose.connect(process.env.MONGODB);
        console.log("db connected");
    }catch(err){
    }
}
module.exports=connectdb;