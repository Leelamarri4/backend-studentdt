const express = require("express");

const router = express.Router();

const {
    getProducts
} = require("../controller/userController");

router.get("/", getProducts);

module.exports = router;