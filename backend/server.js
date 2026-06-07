const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// ==============================
// Middleware
// ==============================

app.use(cors());
app.use(express.json());


// ==============================
// Routes
// ==============================

const contactRoutes = require("./routes/contactRoutes");

app.use("/api", contactRoutes);


// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});


// ==============================
// Projects API
// ==============================

app.get("/api/projects", (req, res) => {

    const projects = [

        {
            title: "AI Portfolio Website",
            description: "Modern animated portfolio website with backend integration.",
            technologies: "HTML, CSS, JavaScript, Node.js",
            github: "https://github.com/",
            live: "https://example.com"
        },

        {
            title: "Weather App",
            description: "Real time weather application using API.",
            technologies: "React, API, CSS",
            github: "https://github.com/",
            live: "https://example.com"
        },

        {
            title: "DSA Visualizer",
            description: "Interactive data structures and algorithms visualizer.",
            technologies: "JavaScript, HTML, CSS",
            github: "https://github.com/",
            live: "https://example.com"
        }

    ];

    res.status(200).json(projects);
});


// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});