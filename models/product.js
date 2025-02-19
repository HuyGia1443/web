const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
})

module.exports = mongoose.model('Product', productionSchema);