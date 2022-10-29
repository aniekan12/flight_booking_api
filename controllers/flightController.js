const {v4: uuid} = require('uuid');
const {Flights} = require('../models/flight');

exports.bookFlight = async (req, res) => {
    try {
        const {title, time, price, date} = req.body; 
        const newFlight = {
                id:uuid(),
                title,
                time,
                price, 
                date,
        }
        
        Flights.push(newFlight);

        res.status(201).json({
            status: true,
            message:'flight booked successfully',
            data: {
                id:uuid(),
                title,
                time,
                price, 
                date,
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllFlights = async (req, res) => {
    try {
        const flights  = Flights;
        res.status(200).json({
            status: true,
            message:'flights retrieved successfully',
            data: flights,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}