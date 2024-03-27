const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('products', productSchema);