
require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server and database connection
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully!");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("MongoDB connection failed:");
        console.log(error.message);
    }
}

startServer();

