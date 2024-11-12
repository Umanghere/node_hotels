const mongoose = require('mongoose');
require("dotenv").config();

const Online_DB = process.env.Online_DB
const Local_DB = process.env.Local_DB
// The URL used for Local 
// const mongoURL = Local_DB // Replace 'hotels' with the desired database name

// For Hosting purpose, use this URL. This is the URL we got from Online DC Cluster (MongoDB Atlas website)
const mongoURL = Online_DB

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