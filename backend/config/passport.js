const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { User } = require('../models');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
  const foundUser = await User.findOne({ _id });
  done(null, foundUser);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const foundUser = await User.findOne({ googleID: profile.id }).exec();
        if (foundUser) {
          done(null, foundUser);
        } else {
          const newUser = new User({
            googleID: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          const savedUser = await newUser.save();
          done(null, savedUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
