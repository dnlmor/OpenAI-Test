# OpenAI-Test

    AI-Test-Center/
    │
    ├── client/                   # Frontend (React.js)
    │   ├── public/
    │   │   └── index.html        # Main HTML template
    │   │
    │   └── src/
    │       ├── assets/           # Assets such as images
    │       │   └── bg_image.jpg  # Background image for login/signup and dashboard
    │       │
    │       ├── components/       # Reusable React components
    │       │   ├── Auth/         # Login & Signup components
    │       │   │   ├── Login.js   # Login component
    │       │   │   └── Signup.js  # Signup component
    │       │   │
    │       │   ├── Dashboard/    # Main Dashboard components
    │       │   │   ├── Sidebar.js   # Sidebar for navigation
    │       │   │   ├── Chatbot.js    # Chatbot UI
    │       │   │   ├── LanguageSelector.js # Component for choosing a language
    │       │   │   ├── SectionSelector.js  # Component for choosing sections (lessons, exercises, etc.)
    │       │   │   ├── SavedConvo.js       # Component for displaying saved conversations
    │       │   │   └── WelcomeHeader.js     # Component for welcome header and introduction
    │       │   │
    │       │   ├── Popup.js      # Reusable Popup Modal
    │       │   │
    │       │   ├── Layout.js     # Layout component to handle opacity styles for pages
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
    server/
    ├── config/
    │   └── db.js             # MongoDB connection setup
    │
    ├── controllers/
    │   ├── authController.js  # Handles user login/signup
    │   ├── openaiController.js # Manages interactions with OpenAI API
    │   └── languageController.js # Manages language learning logic
    │
    ├── middleware/
    │   ├── authMiddleware.js   # JWT authentication middleware
    │   └── errorHandler.js      # Error handling middleware
    │
    ├── models/
    │   ├── User.js             # User model
    │   ├── Conversation.js      # Stores user conversations
    │   └── Language.js         # Manages supported languages
    │
    ├── routes/
    │   ├── authRoutes.js       # Routes for user auth
    │   ├── openaiRoutes.js     # Routes for OpenAI interaction
    │   └── languageRoutes.js    # Routes for language services
    │
    ├── utils/
    │   ├── generateToken.js     # JWT token generator
    │   └── openaiHelper.js      # Helper for OpenAI API calls
    │
    ├── app.js                  # Express app setup
    ├── server.js               # Entry point for the Node server
    └── package.json            # Project metadata and dependencies
