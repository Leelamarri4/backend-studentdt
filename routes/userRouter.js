const express=require('express');
const router=express.Router();
const {Addmobiles,deletemobiles}=require('../controller/userController')


router.post("/mobiles/add",Addmobiles);
router.delete("/delete/:id,deletemobiles");

module.exports =router;
