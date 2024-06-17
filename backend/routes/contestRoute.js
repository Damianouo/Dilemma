const router = require('express').Router();
const { Contest } = require('../models');

//? get all contest
router.get('/', async (req, res) => {
  try {
    const allContests = await Contest.find({}).populate('author').exec();
    return res.send(allContests);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//? get contests by user id
router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const foundContests = await Contest.find({ author: _id }).populate('author').exec();
    return res.send(foundContests);
  } catch (error) {
    return res.status(500).send(error);
  }
});

const authCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/auth/google');
  }
};

//? create new contest
router.post('/', authCheck, async (req, res) => {
  //' todo: validate data

  //' create new contest
  const { title, description, category, entries } = req.body;
  const totalParticipants = +req.body.totalParticipants;
  try {
    const newContest = new Contest({
      title,
      description,
      category,
      totalParticipants,
      entries,
      author: req.user._id,
    });
    const savedContest = await newContest.save();
    console.log('contest creation successful');
    return res.send({
      message: 'contest creation successful',
      savedContest,
    });
  } catch (error) {
    console.log(req.user);
    return res.status(500).send({
      message: 'fail to create a new contest',
      error,
    });
  }
});

module.exports = router;
