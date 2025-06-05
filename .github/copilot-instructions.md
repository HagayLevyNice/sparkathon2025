<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This workspace contains an Angular frontend and a Node.js backend. The frontend collects a JIRA Epic link from the user. The backend calls an LLM to generate XRay tests in Gherkin format for all Epic scenarios and uses the JIRA API to add the tests to XRay.

- For Angular code, follow best practices for modularity and service usage.
- For Node.js, use Express for API endpoints and Axios for HTTP requests.
- Ensure CORS is enabled for local development.
- Use environment variables for sensitive data (e.g., JIRA credentials, LLM API keys).
- Write clear comments and keep code maintainable.
