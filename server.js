const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDb 
mongoose
    .connect(db)
    .then(() => {console.log("Database connected")})
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello Abbhi')
});

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});