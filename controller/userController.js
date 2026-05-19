const User=require('../model/User');

const Addmobiles = async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }catch(err){
        res.send(err)
    }
}

const deletemobiles = async(req,res)=>{

    try{
   

        const user = await User.findByIdAndDelete(req.params.id);
       res.send("user deleted");



    }catch(err){
    console.log(err)
}
}
module.exports={Addmobiles,deletemobiles}