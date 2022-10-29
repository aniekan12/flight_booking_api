const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/", routes);
app.use('/book_flight',routes);
app.use('/get_all_flights',routes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
