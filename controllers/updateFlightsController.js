const {Flights} = require('../models/flight');

exports.updateFlight = async (req, res) => {
    try {
        var id = req.params.id;
        var {title, time, price, date} = req.body;
        Flights.find((flight) => {
            if (flight.id === id) {
                flight.title = title;
                flight.time = time;
                flight.price = price;
                flight.date = date;
                res.status(200).json({
                    status: true,
                    message: 'flight updated successfully',
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