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
    │       ├── api/
    │       │   ├── authApi.js
    │       │   ├── chatApi.js
    │       │   ├── conversationApi.js
    │       │   ├── languageApi.js
    │       │   ├── profileApi.js
    │       │   └── pdfApi.js
    │       │
    │       ├── assets/
    │       │   ├── styles/
    │       │   │   └── tailwind.css
    │       │
    │       ├── components/
    │       │   ├── Auth/
    │       │   │   ├── Login.jsx
    │       │   │   └── Signup.jsx
    │       │   │
    │       │   ├── Dashboard/
    │       │   │   ├── Chat/
    │       │   │   │   ├── Chatbot.jsx
    │       │   │   │   ├── Message.jsx
    │       │   │   │   ├── SaveConversationModal.jsx
    │       │   │   │   ├── SavedConvoList.jsx
    │       │   │   │   ├── ConversationBox.jsx
    │       │   │   │   └── DownloadButton.jsx
    │       │   │   │
    │       │   │   ├── Sidebar.jsx
    │       │   │   ├── WelcomeHeader.jsx
    │       │   │   ├── LanguageSelector.jsx
    │       │   │   ├── SectionSelector.jsx
    │       │   │   └── DashboardContent.jsx
    │       │   │
    │       │   ├── UI/
    │       │   │   └── Modal.jsx
    │       │   │
    │       │   └── Layout/
    │       │       ├── Header.jsx
    │       │       ├── Footer.jsx
    │       │       └── MainLayout.jsx
    │       │   ├── PrivateRoute.js
    │       │
    │       ├── context/
    │       │   ├── AuthContext.js
    │       │   ├── ChatContext.js
    │       │   └── LanguageContext.js
    │       │
    │       ├── hooks/
    │       │   ├── useAuth.js
    │       │   ├── useChat.js
    │       │   ├── useLanguage.js
    │       │   └── useDownload.js
    │       │
    │       ├── pages/
    │       │   ├── Auth/
    │       │   │   ├── LoginPage.jsx
    │       │   │   └── SignupPage.jsx
    │       │   └── Dashboard/
    │       │       └── DashboardPage.jsx
    │       │   ├── ProfilePage.jsx
    │       │   ├── NotFound.jsx
    │       │
    │       ├── services/
    │       │   ├── openaiService.js
    │       │   ├── conversationService.js
    │       │   ├── authService.js
    │       │   ├── storageService.js
    │       │   └── pdfService.js
    │       │
    │       ├── utils/
    │       │   ├── auth.js
    │       │   ├── chatUtils.js
    │       │   ├── languageUtils.js
    │       │   └── pdfUtils.js
    │       │
    │       ├── App.js
    │       ├── index.js
    │       └── package.json
    │
    ├── tailwind.config.js
    ├── postcss.config.js
    │
    ├── server/
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   ├── authController.js
    │   ├── openaiController.js
    │   ├── conversationController.js
    │   ├── languageController.js
    │   └── pdfController.js
    │
    ├── middleware/
    │   ├── authMiddleware.js
    │   ├── requestLogger.js
    │   └── errorHandler.js
    │
    ├── models/
    │   ├── User.js
    │   ├── Conversation.js
    │   └── Language.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── openaiRoutes.js
    │   ├── conversationRoutes.js
    │   ├── languageRoutes.js
    │   └── pdfRoutes.js
    │
    ├── services/
    │   ├── conversationService.js
    │   ├── languageService.js
    │   └── pdfService.js
    │
    ├── utils/
    │   ├── generateToken.js
    │   ├── logger.js
    │   ├── openaiHelper.js
    │   └── errorHandler.js
    │
    ├── app.js
    ├── server.js
    └── package.json
