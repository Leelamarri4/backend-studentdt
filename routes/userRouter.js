const express = require("express");

const router = express.Router();

const {
    getProducts
} = require("../controller/userController");

router.get("/products", getProducts);

module.exports = router;