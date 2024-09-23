# OpenAI-Test

AI-Test-Center/
│
├── client/                   # Frontend (React.js)
│   ├── public/
│   │   └── index.html        # Main HTML template
│   │
│   └── src/
│       ├── components/       # Reusable React components
│       │   ├── Auth/         # Login & Signup components
│       │   ├── Dashboard/    # Main Dashboard components
│       │   ├── Sidebar.js    # Sidebar for navigation
│       │   ├── Chatbot.js    # Chatbot UI
│       │   └── Popup.js      # Reusable Popup Modal
│       │
│       ├── context/          # Context API for managing global state
│       │   └── UserContext.js
│       │
│       ├── pages/            # Page components (React Router)
│       │   ├── LoginPage.js
│       │   ├── SignupPage.js
│       │   └── DashboardPage.js
│       │
│       ├── services/         # API service handlers
│       │   └── openai.js     # Functions to call OpenAI API
│       │
│       ├── utils/            # Helper functions (auth, etc.)
│       │   └── auth.js       # Token management, authentication
│       │
│       ├── App.js            # Root React component
│       ├── index.js          # Main entry point for React app
│       └── package.json
│
├── server/                   # Backend (Node.js & Express)
│   ├── config/               # Configuration files (DB, environment)
│   │   └── db.js             # MongoDB connection setup
│   │
│   ├── controllers/          # Route handler logic
│   │   ├── authController.js # Handles user login/signup
│   │   ├── testController.js # Handles test results, chatbot
│   │   └── openaiController.js # Manages interactions with OpenAI API
│   │
│   ├── middleware/           # Middleware (auth, error handling)
│   │   └── authMiddleware.js # JWT authentication middleware
│   │
│   ├── models/               # Mongoose models for MongoDB
│   │   ├── User.js           # User model (schema)
│   │   ├── TestResult.js     # Stores user's test progress/results
│   │   └── Test.js           # Test schema (structure of test sections)
│   │
│   ├── routes/               # API routes (Express)
│   │   ├── authRoutes.js     # Routes for user auth (login/signup)
│   │   ├── testRoutes.js     # Routes for managing tests/results
│   │   └── openaiRoutes.js   # Routes for chatbot interaction
│   │
│   ├── utils/                # Utility functions (token, error handling)
│   │   ├── generateToken.js  # JWT token generator
│   │   ├── errorHandler.js   # Centralized error handling
│   │   └── openaiHelper.js   # Helper for OpenAI API calls
│   │
│   ├── app.js                # Express app setup
│   ├── server.js             # Entry point for the Node server
│   └── package.json
│
├── .env                      # Environment variables (API keys, DB URI)
├── .gitignore                 # Git ignore file
├── README.md                  # Project description
└── package.json               # Project metadata and dependencies
