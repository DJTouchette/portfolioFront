const compression = require('compression');
const express = require('express');
const oneYear = 31557600000;

module.exports = function expressConfig(app) {
  app.use(compression());
  app.use(express.static('build', { maxAge: oneYear }));
}
