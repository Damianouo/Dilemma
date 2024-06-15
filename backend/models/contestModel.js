const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  winCount: Number,
});

const contestSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['video', 'photo'],
    required: true,
  },
  totalParticipants: {
    type: Number,
    required: true,
  },
  entries: {
    type: [entrySchema],
    required: true,
  },
});

module.exports = mongoose.model('Contest', contestSchema);
