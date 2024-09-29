// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files
app.set('view engine', 'ejs');

let reviews = []; // Array to store reviews

// Routes
app.get('/', (req, res) => {
    res.render('index', { reviews });
});

app.post('/review', (req, res) => {
    const { product, review } = req.body; // Destructure product and review from the request body
    reviews.push({ product, review }); // Push new review to the reviews array
    res.redirect('/'); // Redirect back to the home page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

