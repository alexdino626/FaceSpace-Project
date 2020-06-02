'use strict';

const express = require('express');
const morgan = require('morgan');

const { users } = require('./data/users');

let currentUser = {};

// declare the 404 function
const handleFourOhFour = (req, res) => {
  res.status(404).send("I couldn't find what you're looking for.");
};

const handleSignin = (req, res) => {
  res.status(200).render('pages/signin');
};

const handleName = (req, res) => {
  const firstName = req.query.firstName;
  const userObj = users.find((user) => user.name === firstName) || null;

  if (userObj) {
    currentUser = userObj;
    res.redirect('/');
  } else {
    res.redirect('/signin');
  }
};

// -----------------------------------------------------
// server endpoints
express()
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/signin', handleSignin)
  .get('/getname', handleName)

  // a catchall endpoint that will send the 404 message.
  .get('*', handleFourOhFour)

  .listen(8000, () => console.log('Listening on port 8000'));
