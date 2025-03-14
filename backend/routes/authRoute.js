const router = require('express').Router();
const passport = require('passport');

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
    successRedirect: process.env.NODE_ENV !== 'dev' ? '/' : 'http://localhost:5173',
    failureRedirect: process.env.NODE_ENV !== 'dev' ? '/login' : 'http://localhost:5173/login',
  })
);

router.get('/login/failed', (req, res) => {
  return res.status(401).send('google login failed');
});

router.get('/login/success', (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
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
