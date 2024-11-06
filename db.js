const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/hotels" // Replace 'hotels' with the desired database name

// Establishing connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// These are event listeners to know whether the database is connected, error or disconnected
db.on('connected', () => {
    console.log("Connection established");
});

db.on('error', (err) => {
    console.log("There is some error:", err);
});

db.on('disconnected', () =>{
    console.log("Connection disconnected successfully");
});

module.exports = db;