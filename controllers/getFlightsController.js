const { Flights } = require('../models/flight');

exports.getSingleFlight = async (req, res) => {
    try {
        var id = req.params.id;
        Flights.find((flight) => {
            if (flight.id === id) {
                res.status(200).json({
                    status: true,
                    message: 'flight found',
                    flight,
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: 'flight not found',
                });
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

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

