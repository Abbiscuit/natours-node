// const fs = require('fs');

const Tour = require('../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkBody = (req, res, next) => {
  // Check if body contains the name and property
  if (!req.body.name || !req.body.price)
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });

  next();
};

/* Tours Route */

exports.getAllTours = (req, res) => {};

exports.createTour = (req, res) => {};

exports.getTour = (req, res) => {};

exports.updateTour = (req, res) => {};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {},
  });
};
