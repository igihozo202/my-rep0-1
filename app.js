
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Home page
app.get('/', (req, res) => {
    res.send('Welcome to my Stock Management System! My Node.js application is running successfully.');
});

// About page
app.get('/about', (req, res) => {
    res.send('This application was developed as a DevOps deployment assignment using Node.js and Render.');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
