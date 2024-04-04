// server.js

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mayur_edu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a schema for MongoDB
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormDataModel = mongoose.model("FormData", FormDataSchema);

// Route to handle form submission
app.post("/api/form-submit", async (req, res) => {
  try {
    // Extract data from request
    const { name, email, message } = req.body;

    // Save data to MongoDB
    const formData = new FormDataModel({
      name,
      email,
      message,
    });
    await formData.save();

    // Send response
    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
