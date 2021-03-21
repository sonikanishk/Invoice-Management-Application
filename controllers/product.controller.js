const Invoice = require('../models/invoicedata.model');
const mongoose = require('mongoose');
const {validationResult} = require('express-validator');

const { errorHandler } = require('../helpers/dbErrorhandler');
const _ = require('lodash');
const fetch = require('node-fetch');


exports.productsController = function(req,res) {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const firsterror = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
            errors: firsterror
        });
    } else {
        Invoice.find({}).limit(100).sort({'total_open_amount':1}).then(excersises => res.json(excersises))
        .catch(err=> res.status(400).json('Error : ' + err));
    }
};
// // business_code	cust_number	name_customer	clear_date	buisness_year	doc_id	posting_date	document_create_date	document_create_date	due_in_date	invoice_currency	document type	posting_id	area_business	total_open_amount	baseline_create_date	cust_payment_terms	invoice_id	isOpen
// exports.newproductsController = function(req,res) {
//   const errors = validationResult(req);
  
//   if(!errors.isEmpty()){
//       const firsterror = errors.array().map(error => error.msg)[0];
//       return res.status(422).json({
//           errors: firsterror
//       });
//   } else {
//       const temp = "1";
//       const colab = {
//         business_code: temp,
//         cust_number: temp,
//         name_customer : temp,
//         clear_date: temp,
//         buisness_year: temp,
//         doc_id: temp,
//         due_in_date: temp,
//         document_create_date: temp,
//         invoice_currency: temp,
//         document_type: temp,
//         posting_id: temp,
//         area_business: temp,
//         total_open_amount: temp,
//         baseline_create_date: temp,
//         cust_payment_terms: temp,
//         invoice_id: temp,
//         isOpen: temp,
//     }
//       const invoice = new Invoice(colab);
  
//           invoice.save((err, invoice) => {
//             if (err) {
//               console.log('Save error', errorHandler(err));
//               return res.status(401).json({
//                 errors: errorHandler(err)
//               });
//             } else {
//               return res.json({
//                 success: true,
//                 message: invoice,
//                 message: 'invoice uploaded'
//               });
//             }
//           });
//   }
// };


exports.filterproductController = (req, res) => {
    const {mincost,maxcost,quantity,minlead,maxlead,search } = req.body;
    
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const firstError = errors.array().map(error => error.msg)[0];
      return res.status(422).json({
        errors: firstError
      });
    } else {
      if(mincost!=="" && maxcost!==""){
        Invoice.find({price_rs:{$lte:maxcost,$gte:mincost},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else if(minlead!=="" && maxlead!==""){
        Invoice.find({lead_time:{$lte:maxlead,$gte:minlead},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else if(quantity!==""){
        Invoice.find({quantity:quantity,buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      
    }
  };
  exports.searchproductController = (req, res) => {
    const {search } = req.body;
    // console.log(search);
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const firstError = errors.array().map(error => error.msg)[0];
      return res.status(422).json({
        errors: firstError
      });
    } else {
        if(search!==""){
          Invoice.find({name_customer:{$regex:search}}).limit(100).sort({'total_open_amount':1}).then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error: ' + err)); 
        }
    }
  };