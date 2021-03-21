const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    business_code: {
        type: String
    },
    cust_number: {
        type: Number
    },
    name_customer: {
        type: String
    },
    clear_date: {
        type: String
    },
    buisness_year: {
        type: Number
    },
    doc_id: {
        type: String
    },
    due_in_date: {
        type: String
    },
    document_create_date: {
        type: String
    },
    invoice_currency: {
        type: String
    },
    document_type: {
        type: String
    },
    posting_id: {
        type: String
    },
    area_business: {
        type: String
    },
    total_open_amount: {
        type: Number
    },
    baseline_create_date: {
        type: String
    },
    cust_payment_terms: {
        type: String
    },
    invoice_id: {
        type: String
    },
    isOpen: {
        type: String
    },


});

module.exports = mongoose.model('Invoice',invoiceSchema)
