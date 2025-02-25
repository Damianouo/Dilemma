const router = require('express').Router();
const { Contest } = require('../models');
const { contestValidation } = require('../utils/contestValidation');

//? get all contest
router.get('/', async (req, res) => {
  try {
    const allContests = await Contest.find({}).populate('author').exec();
    return res.json(allContests);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? get contests by contest id
router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const foundContests = await Contest.findOne({ _id }).populate('author').exec();
    return res.json(foundContests);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? get contests by user id
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const foundContests = await Contest.find({ author: userId }).populate('author').exec();
    return res.json(foundContests);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? add entry winCount
router.patch('/:_id', async (req, res) => {
  const { _id } = req.params;
  const { entryId } = req.body;

  try {
    const foundContest = await Contest.findOne({ _id }).exec();
    if (!foundContest) throw new Error();
    const entry = foundContest.entries.id(entryId);
    if (!entry) throw new Error();
    entry.winCount += 1;
    await foundContest.save();
    return res.send();
  } catch (error) {
    return res.status(500).send('internal server error');
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
  const { title, description, category, entries } = req.body;
  const totalParticipants = +req.body.totalParticipants;
  const validationResult = contestValidation(title, description, totalParticipants, entries.length);
  if (!validationResult.successful) {
    return res.status(400).json({
      message: validationResult.message,
      details: validationResult.details,
    });
  }
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
    return res.json({
      message: 'contest creation successful',
      savedContest,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'fail to create a new contest',
      error,
    });
  }
});

module.exports = router;
