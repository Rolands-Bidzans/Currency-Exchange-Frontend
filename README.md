# Currency Exchange React Frontend
This is the React + Vite frontend application for the Currency Exchange project. It fetches exchange rates and displays currency data from the backend API.
This forntend uses data from Spring Boot API Backed project visit: https://github.com/Rolands-Bidzans/Currency-Exchange-API

## Getting Started
### Prerequisites
- Node.js v18 or higher (tested with v22.14.0)
- npm package manage v9 or higher (tested with v10.5.2)

### Installation
```bash
git clone https://github.com/your-username/currency-exchange-frontend.git
cd currency-exchange-frontend
npm install
```

### Configure API Endpoint
The frontend expects the backend API URL in environment variables:

Create a .env file in the project root:
```bash
VITE_API_BASE_URL=http://localhost:8080/api
```
