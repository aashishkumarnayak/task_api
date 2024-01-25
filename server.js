const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = 4500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
connectDB();



// Use todo routes
app.use("/api/v1/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
