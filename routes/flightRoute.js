const express = require('express');

const router = express.Router();
const bookFlightscontroller = require('../controllers/bookFlightController');
const getFlightscontroller = require('../controllers/getFlightsController');
const updateFlightscontroller = require('../controllers/updateFlightsController');



router.post('/', bookFlightscontroller.bookFlight)
.get('/', getFlightscontroller.getAllFlights)
.get('/:id',getFlightscontroller.getSingleFlight);

module.exports = router;

