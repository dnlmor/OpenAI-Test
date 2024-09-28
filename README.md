    AI-LanguageLearning-Center/
    │
    ├── client/                   
    │   ├── public/
    │   │   └── index.html        
    │   │
    │   └── src/
    │       ├── assets/           
    │       │   └── bg_image.jpg  
    │       │
    │       ├── components/       
    │       │   ├── Auth/         
    │       │   │   ├── Login.jsx
    │       │   │   └── Signup.jsx
    │       │   │
    │       │   ├── Dashboard/
    │       │   │   ├── Dashboard.jsx
    │       │   │   ├── Sidebar.jsx
    │       │   │   ├── Chatbot.jsx
    │       │   │   ├── LanguageSelector.jsx
    │       │   │   ├── SectionSelector.jsx
    │       │   │   ├── SaveConversationModal.jsx
    │       │   │   ├── SavedConvo.js
    │       │   │   └── WelcomeHeader.jsx
    │       │   │
    │       │   ├── Popup.jsx    
    │       │   ├── LogoutButton.jsx
    │       │   ├── PrivateRoute.js
    │       │   ├── Layout.jsx
    │       │
    │       ├── context/          
    │       │   └── UserContext.js
    │       │
    │       ├── pages/            
    │       │   ├── LoginPage.jsx
    │       │   ├── SignupPage.jsx
    │       │   └── DashboardPage.jsx
    │       │
    │       ├── services/         
    │       │   └── openai.js
    │       │   └── conversation.js
    │       │
    │       ├── utils/            
    │       │   └── auth.js       
    │       │
    │       ├── App.js            
    │       ├── index.js          
    │       └── package.json
    │
    server/
    ├── config/
    │   └── db.js             
    │
    ├── controllers/
    │   ├── authController.js  
    │   ├── openaiController.js 
    │   ├── languageController.js 
    │   └── conversationController.js
    │
    ├── middleware/
    │   ├── authMiddleware.js   
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
    │   ├── languageRoutes.js    
    │   └── conversationRoutes.js
    │
    ├── utils/
    │   ├── generateToken.js     
    │   └── openaiHelper.js      
    │
    ├── app.js                  
    ├── server.js               
    └── package.json            
