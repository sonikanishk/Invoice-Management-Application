const Product = require('../models/productdata.model');
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
        Product.find({}).sort({'weight_gsm':1}).then(excersises => res.json(excersises))
        .catch(err=> res.status(400).json('Error : ' + err));
    }
};

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
        Product.find({price_rs:{$lte:maxcost,$gte:mincost},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else if(minlead!=="" && maxlead!==""){
        Product.find({lead_time:{$lte:maxlead,$gte:minlead},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else if(quantity!==""){
        Product.find({quantity:quantity,buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
      }
      
    }
  };
  exports.searchproductController = (req, res) => {
    const {mincost,maxcost,quantity,minlead,maxlead,search } = req.body;
    // console.log(search);
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const firstError = errors.array().map(error => error.msg)[0];
      return res.status(422).json({
        errors: firstError
      });
    } else {
        if(search!=="" && maxcost==="" && quantity==="" && minlead==="" && mincost==="" && maxlead===""){
          Product.find({buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error: ' + err)); 
        }
        else if((mincost&&maxcost) && quantity==="" && minlead==="" && maxlead===""){
          Product.find({price_rs:{$lte:maxcost,$gte:mincost},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error: ' + err));
        }
        else if(quantity!=="" && maxcost===""  && minlead==="" && mincost==="" && maxlead===""){
          Product.find({quantity:quantity,buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error: ' + err));   
        }
        else if((minlead&&maxlead) && quantity==="" && mincost==="" && maxcost===""){
          Product.find({lead_time:{$lte:maxlead,$gte:minlead},buyer_name:{$regex:search}}).then(exercises => res.json(exercises))
          .catch(err => res.status(400).json('Error: ' + err));
        }
        
    }
  };