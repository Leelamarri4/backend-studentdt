const axios = require("axios");

// Get Fake Store Products
const getProducts = async (req, res) => {

    try {

        // Fetch products from Fake Store API
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );

        // Send products
        res.json(response.data);

    } catch (error) {

        res.json({
            error: error.message
        });

    }

};

module.exports = {
    getProducts
};