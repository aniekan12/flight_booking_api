const express = require('express');

const router = express.Router();
const bookFlightscontroller = require('../controllers/bookFlightController');
const getFlightscontroller = require('../controllers/getFlightsController');
const updateFlightscontroller = require('../controllers/updateFlightsController');
const deleteFlightscontroller = require('../controllers/deleteFlightsController');  



router.post('/', bookFlightscontroller.bookFlight)
.get('/', getFlightscontroller.getAllFlights)
.get('/:id',getFlightscontroller.getSingleFlight)
.put('/:id',updateFlightscontroller.updateFlight)
.delete('/:id',deleteFlightscontroller.deleteFlight)

module.exports = router;

