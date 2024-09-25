const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  sections: [{ type: String }],
}, {
  timestamps: true,
});

const Language = mongoose.model('Language', languageSchema);
module.exports = Language;
