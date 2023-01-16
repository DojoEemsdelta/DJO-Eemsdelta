const express = require('express');
require('./p5/index.js');

// Create Express app
const app = express();

// A sample route
app.get('/', (req, res) => res.send('Hello World'));

// Static files
app.use(express.static('p5'));

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000'));
