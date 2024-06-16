const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = 'http://localhost:5173';

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

router.get('/login/failed', (req, res) => {
  return res.status(401).send('google login failed');
});

router.get('/login/success', (req, res) => {
  if (req.user) {
    return res.status(200).json({
      message: 'login successful',
      user: req.user,
    });
  } else {
    return res.status(401).send();
  }
});

router.post('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    return res.json({ message: 'logout successful' });
  });
});

module.exports = router;
