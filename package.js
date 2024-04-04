// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Route to handle form submission
app.post("/api/form-submit", (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Here you can handle the form data as needed.
    // For example, you can save it to a database, send emails, etc.

    // For demonstration purposes, let's just log the data to the console
    console.log("Form Data:", { name, email, message });

    // Send a response indicating success
    res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    // If an error occurs, send a response with an error message
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
