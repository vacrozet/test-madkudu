const lsitRoutes = require('express').Router();

const {
  listAction: { customAction }
} = require('../actions');

lsitRoutes.post('/', customAction);
module.exports = lsitRoutes;
