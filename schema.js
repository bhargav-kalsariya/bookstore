const mongoose = require('mongoose');

let bookschema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    catagory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: String,
    quantity: {
        type: Number,
        required: true
    },
    rating: Number
})
const bookstore = mongoose.model('book', bookschema);
module.exports = bookstore;