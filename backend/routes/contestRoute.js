const router = require('express').Router();
const { Contest } = require('../models');
const { contestValidation } = require('../utils/contestValidation');

const authCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/auth/google');
  }
};

//? get all contest
router.get('/', async (req, res) => {
  try {
    const allContests = await Contest.find({}).populate('author').exec();
    return res.json(allContests);
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

//? update contest
router.patch('/:_id', authCheck, async (req, res) => {
  const { _id } = req.params;

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
    const foundContest = await Contest.findById(_id).exec();
    if (!foundContest) {
      return res.status(404).json({ message: 'Contest not found' });
    }
    if (
      !req.user ||
      !foundContest.author ||
      foundContest.author.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({ message: 'Unauthorized: You are not the author of this contest' });
    }

    await Contest.findByIdAndUpdate(
      _id,
      { $set: { title, description, category, totalParticipants, entries } },
      { new: true, runValidators: true }
    ).exec();
    return res.json({
      message: 'Contest updated successfully',
    });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
});

router.delete('/:_id', authCheck, async (req, res) => {
  const { _id } = req.params;

  try {
    const foundContest = await Contest.findById(_id).exec();
    if (!foundContest) {
      return res.status(404).json({ message: 'Contest not found.' });
    }
    if (
      !req.user ||
      !foundContest.author ||
      foundContest.author.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({ message: 'Unauthorized: You are not the author of this contest' });
    }

    await Contest.findByIdAndDelete(_id).exec();
    return res.json({ message: 'Contest deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
});

//? add entry winCount
router.patch('/:_id/entries/:entryId', async (req, res) => {
  const { _id, entryId } = req.params;

  try {
    const foundContest = await Contest.findOne({ _id }).exec();
    if (!foundContest) {
      return res.status(404).json({ message: 'Contest not found' });
    }
    const entry = foundContest.entries.id(entryId);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    entry.winCount += 1;
    await foundContest.save();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
});

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
