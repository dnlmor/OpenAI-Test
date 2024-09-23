const TestResult = require('../models/TestResult');

const saveTestResult = async (req, res) => {
  const { userId, testType, results } = req.body;
  const testResult = new TestResult({ userId, testType, results });
  await testResult.save();
  res.status(201).json({ message: 'Test result saved', testResult });
};

module.exports = { saveTestResult };
