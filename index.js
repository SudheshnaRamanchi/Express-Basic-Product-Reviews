const express = require("express");
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from 'public' folder
app.use(express.static("public"));

// Home route
app.get('/', (req, res) => {
    res.send('home page');
});

// Design route
app.get('/design', (req, res) => {
    const data = {
        id: 1,
        name: 'Sudheshna',
        place: 'Mangapet',
        subjects: ['english', 'telugu', 'hindi', 'maths'],
        pics: ['img2.jpg', 'img3.jpg'] // Update paths as needed
    };
    res.render('test', { data: data });
});

// Start the server
app.listen(3000, () => console.log("server started on port 3000..."));
