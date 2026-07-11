const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("PORT =", process.env.PORT);

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API 🚀");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});