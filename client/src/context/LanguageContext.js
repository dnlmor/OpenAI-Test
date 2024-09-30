import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  selectedLanguage: 'en',
};

export const LanguageContext = createContext();

const languageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, selectedLanguage: action.payload };
    case 'RESET_CHAT':
      return initialState;
    default:
      return state;
  }
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language context
export const useLanguage = () => {
  const { state, dispatch } = useContext(LanguageContext);

  const setLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
    dispatch({ type: 'RESET_CHAT' });
  };

  return { selectedLanguage: state.selectedLanguage, setLanguage };
};
