const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  type: { type: String, required: true },
  sections: { type: Array, required: true }, // Array of test sections
});

module.exports = mongoose.model('Test', testSchema);
