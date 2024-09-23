const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  testType: { type: String, required: true },
  results: { type: Object, required: true }, // Store results as an object
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TestResult', testResultSchema);
