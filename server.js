'use strict';

const express = require('express');
const morgan = require('morgan');

const { users } = require('./data/users');

const PORT = process.env.PORT || 8000;

// -----------------------------------------------------
// server endpoints
express()
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
