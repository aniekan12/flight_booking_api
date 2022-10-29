const {Flights} = require('../models/flight');

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