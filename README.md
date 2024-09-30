# AI Language Learning Training Center

**The purpose of the project is to implement the usage of AI into a useful application for students or people who wants excel in multiple languages**

# Components
**Server-Side**
- Node js
- Mongodb
- OpenAI API key

**Client-Side**
- React js
- Tailwind CSS

# File Structure

    ├── client/
    │   └── src/
    │       ├── api/                  # Abstract API calls for easier maintenance
    │       │   ├── authApi.js        # Handles login, signup, token refresh
    │       │   ├── chatApi.js        # Manages OpenAI chat communications
    │       │   ├── conversationApi.js  # APIs to manage user conversations (save, retrieve)
    │       │   ├── languageApi.js    # Language-related API calls
    │       │   ├── profileApi.js    # Language-related API calls
    │       │   └── pdfApi.js         # NEW: API to handle conversation download requests
    │       │
    │       ├── assets/               # Static assets (fonts, styles, etc.)
    │       │   ├── styles/           # Centralized custom styles if Tailwind customization is needed
    │       │   │   └── tailwind.css  # Tailwind CSS base, components, utilities
    │       │
    │       ├── components/           # Reusable UI components
    │       │   ├── Auth/             # Login, Signup, and Auth-related components
    │       │   │   ├── Login.jsx
    │       │   │   └── Signup.jsx
    │       │   │
    │       │   ├── Dashboard/
    │       │   │   ├── Chat/         # Encapsulates the chatbot and conversation-specific features
    │       │   │   │   ├── Chatbot.jsx   # Handles the AI chat UI and message flow
    │       │   │   │   ├── Message.jsx   # Reusable component for chat bubbles
    │       │   │   │   ├── SaveConversationModal.jsx  # Modal for saving conversations
    │       │   │   │   ├── SavedConvoList.jsx         # List of saved conversations in the sidebar
    │       │   │   │   ├── ConversationBox.jsx        # NEW: Individual box to represent saved conversation
    │       │   │   │   └── DownloadButton.jsx         # NEW: Button to download a conversation as a PDF
    │       │   │   │
    │       │   │   ├── Sidebar.jsx    # Sidebar for saved chats and logout button
    │       │   │   ├── WelcomeHeader.jsx  # Welcome message and description
    │       │   │   ├── LanguageSelector.jsx  # Language selection component
    │       │   │   ├── SectionSelector.jsx  # Section selection component (Training/Simulation)
    │       │   │   └── DashboardContent.jsx # Main content area of the dashboard
    │       │   │
    │       │   ├── UI/               # Reusable Tailwind-based UI components for modals, buttons, etc.
    │       │   │   └── Modal.jsx
    │       │   │
    │       │   └── Layout/           # Components for page layout and structure
    │       │       ├── Header.jsx    # Top navigation bar for the app
    │       │       ├── Footer.jsx
    │       │       └── MainLayout.jsx  # Central layout that wraps pages
    │       │   ├── PrivateRoute.js
    │       │
    │       ├── context/              # React Context for global state management
    │       │   ├── AuthContext.js    # Context for managing authentication state
    │       │   ├── ChatContext.js    # Chat-related context (stores current chat state)
    │       │   └── LanguageContext.js  # Handles language selection and management
    │       │
    │       ├── hooks/                # Custom hooks to manage logic and state
    │       │   ├── useAuth.js        # Hook for authentication-related logic
    │       │   ├── useChat.js        # Hook to manage chat states (OpenAI interactions)
    │       │   ├── useLanguage.js    # Hook to manage selected language
    │       │   └── useDownload.js    # NEW: Hook to handle conversation download as PDF
    │       │
    │       ├── pages/                # Page-level components (e.g., for routes)
    │       │   ├── Auth/             # Authentication-related pages
    │       │   │   ├── LoginPage.jsx
    │       │   │   └── SignupPage.jsx
    │       │   └── Dashboard/        # Main Dashboard page
    │       │       └── DashboardPage.jsx
    │       │   ├── ProfilePage.jsx
    │       │   ├── NotFound.jsx
    │       │
    │       ├── services/             # Logic abstraction (API/3rd-party service interactions)
    │       │   ├── openaiService.js  # All logic related to OpenAI API interaction
    │       │   ├── conversationService.js  # All logic related to OpenAI API interaction
    │       │   ├── authService.js    # Handles authentication logic
    │       │   ├── storageService.js # LocalStorage/session management
    │       │   └── pdfService.js     # NEW: Logic to generate/download conversation as PDF
    │       │
    │       ├── utils/                # Utility functions and helpers
    │       │   ├── auth.js           # JWT token management, validation, etc.
    │       │   ├── chatUtils.js      # Helpers for chat-specific logic
    │       │   ├── languageUtils.js  # Language-related utilities (conversion, formatting)
    │       │   └── pdfUtils.js       # Utility to generate PDF files for chat history
    │       │
    │       ├── App.js                # Main React App component
    │       ├── index.js              # ReactDOM render entry
    │       └── package.json
    │
    ├── tailwind.config.js            # Tailwind CSS configuration (for custom themes, colors, etc.)
    ├── postcss.config.js             # PostCSS configuration for Tailwind
    │
    ├── server/
    ├── config/
    │   └── db.js                     # MongoDB connection setup
    │
    ├── controllers/
    │   ├── authController.js         # Manages login, signup, token refresh, etc.
    │   ├── openaiController.js       # Handles interaction with OpenAI API
    │   ├── conversationController.js # Stores and retrieves user conversations
    │   └── languageController.js     # Manages language-related actions (CRUD)
    │   └── pdfController.js          # NEW: Handles generation and serving of PDF downloads
    │
    ├── middleware/
    │   ├── authMiddleware.js         # JWT verification and route protection
    │   ├── requestLogger.js
    │   └── errorHandler.js           # Handles and formats errors globally
    │
    ├── models/
    │   ├── User.js                   # MongoDB schema for user data
    │   ├── Conversation.js           # MongoDB schema for conversations
    │   └── Language.js               # MongoDB schema for language data
    │
    ├── routes/
    │   ├── authRoutes.js             # Authentication-related routes (login, signup)
    │   ├── openaiRoutes.js           # Routes for interacting with the OpenAI API
    │   ├── conversationRoutes.js     # Routes for managing conversation data
    │   ├── languageRoutes.js         # Routes for managing available languages
    │   └── pdfRoutes.js              # NEW: Routes for downloading conversations as PDFs
    │
    ├── services/                     # Business logic and third-party services integration
    │   ├── conversationService.js    # Handles conversation data logic
    │   ├── languageService.js        # Manages language-related business logic
    │   └── pdfService.js             # NEW: Handles business logic for creating and serving PDF files
    │
    ├── utils/                        # Utility functions for the backend
    │   ├── generateToken.js          # JWT token generation helper
    │   ├── logger.js
    │   ├── openaiHelper.js           # Helper functions for interacting with OpenAI (prompt generation, etc.)
    │   └── errorHandler.js           # Global error handling utilities
    │
    ├── app.js                        # Main Express app configuration
    ├── server.js                     # Server entry point
    └── package.json
