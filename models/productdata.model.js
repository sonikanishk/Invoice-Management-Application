const mongoose = require('mongoose');

const productdataSchema = new mongoose.Schema({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    },
    lead_time: {
        type: String
    },
    weight_gsm: {
        type: String
    },
    quantity: {
        type: String
    },
    price_rs: {
        type: String
    },
    buyer_name: {
        type: String
    }

});

module.exports = mongoose.model('ProductData',productdataSchema)
