const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getProducts,
    addProduct
};
