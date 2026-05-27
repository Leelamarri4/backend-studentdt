const axios = require("axios");

// Get Fake Store Products
const getProducts = async (req, res) => {

    try {

        // Fetch products from Fake Store API
        application.use(
            cors({
                origin:"*",
            })
        )

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