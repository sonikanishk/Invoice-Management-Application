const mongoose = require('mongoose');

const manufacturerdataSchema = new mongoose.Schema({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    },
    lead_time: {
        type: Number
    },
    weight_gsm: {
        type: Number
    },
    quantity: {
        type: Number
    },
    price_rs: {
        type: Number
    },
    buyer_name: {
        type: String
    }
});

module.exports = mongoose.model('ManufacturerData',manufacturerdataSchema)
