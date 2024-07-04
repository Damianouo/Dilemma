require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { contestRoute, authRoute, youtubeApiRoute } = require('./routes');
require('./config/passport');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

//? Mongo DB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err));

//? Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//? routes
app.use('/auth', authRoute);
app.use('/contest', contestRoute);
app.use('/ytapi', youtubeApiRoute);

app.listen(8080, () => console.log('server is running on port 8080'));
