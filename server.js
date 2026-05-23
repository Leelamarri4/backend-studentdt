const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const connectDb = require("./config/db");

const userRouter = require("./routes/userRouter");

const app = express();

app.use(cors());

app.use(express.json());

// Database Connection
connectDb();

// Routes
app.use("/", userRouter);

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Backend Server Running</h1>");
});

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});