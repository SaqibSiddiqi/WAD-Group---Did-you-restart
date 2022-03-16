/**
 * File: index.js
 * Name: Saqib Hasan Siddiqi
 * Id: 301237796
 * Web App: Midterm- Book list
 */
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let computers = require('../models/computers');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/computers', {
    title: 'Home',
    computers: ''
   });
});

module.exports = router;