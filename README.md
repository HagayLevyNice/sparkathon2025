# Sparkathon2025

This project contains:
- `frontend/`: Angular app for inputting a JIRA Epic link and displaying results.
- `backend/`: Node.js Express API for generating and uploading XRay Gherkin tests using LLM and JIRA API.

## Getting Started

### Frontend
```
cd frontend
npm start
```

### Backend
```
cd backend
node index.js
```

## Development Notes
- Configure environment variables for JIRA and LLM API keys in the backend.
- The frontend communicates with the backend via REST API.
