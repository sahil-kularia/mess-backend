const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: true
  },
  date: {
    type: String, // store as 'YYYY-MM-DD'
    default: () => new Date().toISOString().slice(0, 10)
  },
  breakfast: Boolean,
  lunch: Boolean,
  dinner: Boolean
});

module.exports = mongoose.model('Student', studentSchema);
