const {v4: uuid} = require('uuid');
const {Flights} = require('../models/flight');

exports.getAllFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            status: true,
            message: 'flights retrieved successfully',
            data: flights,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.bookFlight = async (req, res) => {
    try {
        const {title, time, price, date} = req.body; 
        const flight = {
                id:uuid(),
                title,
                time,
                price,
                date,
        }
        
        Flights.push(flight);

        res.status(201).json({
            status: true,
            message:'flight booked successfully',
            flight,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}