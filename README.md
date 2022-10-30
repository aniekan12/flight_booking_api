# flight_booking_api
flight booking api built with node.js and express.js 🎉

## Getting Started

### clone the project
```
git clone
```

### install dependencies

```
 npm install
```

### start the server

```
 npm start
```

### to book a flight

```
POST http://localhost:3000/book_flight
```

sample request 👇🏿
```
{
    "title":"flight to naij",
    "time":"3PM",
    "price":26000,
    "date":"26-09-2022"
}
```

### to get all flights

```
GET http://localhost:3000/flights
```

### to get a flight by id

```
GET http://localhost:3000/flights/:id
```

### to update a flight

```
PUT http://localhost:3000/flights/:id
```

sample request 👇🏿
```
{
    "title":"flight to america",
    "time":"3PM",
    "price":26000,
    "date":"26-09-2022"
}
```

### to delete a flight

```
DELETE http://localhost:3000/flights/:id
```