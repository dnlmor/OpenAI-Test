import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  messages: [],
  userId: null,
  conversations: [],
};

// Create ChatContext
export const ChatContext = createContext();

// Chat reducer to handle state updates
const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'CLEAR_MESSAGES':
      return { ...state, messages: [] };
    case 'SET_USER':
      return { ...state, userId: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    case 'SET_CONVERSATIONS':
      return { ...state, conversations: action.payload };
    case 'ADD_CONVERSATION':
      return { ...state, conversations: [...state.conversations, action.payload] };
    case 'DELETE_CONVERSATION':
      return { ...state, conversations: state.conversations.filter(convo => convo._id !== action.payload) };
    default:
      return state;
  }
};

// ChatProvider component to wrap the application
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for easy access to chat context
export const useChat = () => {
  return useContext(ChatContext);
};
