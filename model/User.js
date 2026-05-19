const mongoose = require("mongoose");
const { type } = require("node:os");

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User",userschema)