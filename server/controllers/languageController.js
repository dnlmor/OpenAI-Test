const Language = require('../models/Language');

const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find({});
    res.json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLanguage = async (req, res) => {
  const { name, sections } = req.body;

  try {
    const language = await Language.create({ name, sections });
    res.status(201).json(language);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getLanguages, createLanguage };
