const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define the port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
