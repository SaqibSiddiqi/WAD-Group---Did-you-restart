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
let users = require('../models/user');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/users', {
    title: 'Home',
    users: ''
   });
});

module.exports = router;