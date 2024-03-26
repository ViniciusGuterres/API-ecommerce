function initMongoDB() {
    const mongoose = require('mongoose');

    const URL = 'mongodb://0.0.0.0:27017/api-ecommerce';

    const db = mongoose.connect(URL);
    const con = mongoose.connection;

    con.on('open', function () {
        console.log('Connected to MongoDB!');
    });

    con.on('error', function () {
        console.log('MongoDB connection error');
    });

    con.on('close', function () {
        console.log('Disconnected to MongoDB!');
    });
}

module.exports = initMongoDB;