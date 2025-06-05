const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// POST /generate-xray-tests
// body: { jiraEpicUrl: string }
app.post('/generate-xray-tests', async (req, res) => {
  const { jiraEpicUrl } = req.body;
  if (!jiraEpicUrl) return res.status(400).json({ error: 'Missing JIRA Epic URL' });

  try {
    // 1. Fetch Epic details from JIRA
    // 2. Call LLM to generate Gherkin tests
    // 3. Add tests to XRay via JIRA API
    // (Pseudo-code, replace with real implementation)
    const epicDetails = await getEpicDetails(jiraEpicUrl);
    const gherkinTests = await callLLMForGherkin(epicDetails);
    const xrayResult = await addTestsToXRay(jiraEpicUrl, gherkinTests);
    res.json({ success: true, gherkinTests, xrayResult });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function getEpicDetails(jiraEpicUrl) {
  // TODO: Implement JIRA API call
  return { summary: 'Sample Epic', scenarios: ['Scenario 1', 'Scenario 2'] };
}

async function callLLMForGherkin(epicDetails) {
  // TODO: Implement LLM call (e.g., OpenAI API)
  return [
    'Feature: ' + epicDetails.summary,
    '  Scenario: ' + epicDetails.scenarios[0],
    '  Scenario: ' + epicDetails.scenarios[1]
  ].join('\n');
}

async function addTestsToXRay(jiraEpicUrl, gherkinTests) {
  // TODO: Implement XRay/JIRA API call to add tests
  return { status: 'success', message: 'Tests added to XRay (mock)' };
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
