const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes')
const mapRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')


connectToDb();

app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));
  app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', userRoutes);

app.use('/captains',captainRoutes);

app.use('/maps',mapRoutes)

app.use('/rides',rideRoutes)



module.exports = app;