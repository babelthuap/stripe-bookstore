'use strict';

var express = require('express');
var router = express.Router();

var stripe = require("stripe")("sk_test_NdLgBtk5yLLjWKyNLrbP0XRd");

router.post('/', function(req, res) {
  var tokenObj = req.body.tokenObj;
  var cart = req.body.cart;
  var total = req.body.total;

  var booktitles = cart.map(function(book){
    return book.title;
  }).join(", ");


  var charge = stripe.charges.create({
    amount: Math.round(total * 100),
    currency: "usd",
    source: tokenObj.id,
    description: booktitles
  }, function(err, charge) {
    res.status(err ? 400 : 200).send(err || charge);
  });
});

module.exports = router;
