const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productId:{
            type: String      
        },
        price:{
            type: String           
        },
        discountedPrice:{
            type: String
        },
        availibility:{
            type: String           
        },
        condition:{
            type: String     
        },
        currency:{
            type: String
        },
        dateAdded:{
            type: String
        },
        isSale:{
            type: String
        },
        merchent:{
            type: String
        },
        sourceUrl:{
            type: String
        },
        brand:{
            type: String
        },
        category:{
            type: String
        },
        imageUrl:{
            type:String
        },
        weight:{
            type:String
        },
        Name:{
            type:String
        }
    }
);
module.exports = mongoose.model('Product',productSchema);