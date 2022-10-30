const {Flights} = require('../models/flight');

exports.deleteFlight = async (req, res) => {
    try {
        var id = req.params.id;
        Flights.find((flight) => {
            if (flight.id === id) {
                Flights.splice(Flights.indexOf(flight), 1);
                res.status(200).json({
                    status: true,
                    message: 'flight deleted successfully',
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