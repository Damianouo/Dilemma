require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { contestRoute, authRoute, youtubeApiRoute } = require('./backend/routes');
require('./backend/config/passport');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

//? Mongo DB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err));

//? Middlewares
app.use(
  cors({
    origin: 'https://dilemma.onrender.com',
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
      secure: true,
      sameSite: 'Lax',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/frontend/dist')));

//? routes
app.use('/auth', authRoute);
app.use('/contest', contestRoute);
app.use('/ytapi', youtubeApiRoute);

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
