const Cart =
require("../models/Cart");


exports.getCart =
async(req,res)=>{

const items =
await Cart.find();

res.json(items);

};


exports.addToCart =
async(req,res)=>{

const item =
new Cart(req.body);

await item.save();

res.json(item);

};