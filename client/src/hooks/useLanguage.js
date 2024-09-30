import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const { state, dispatch } = useContext(LanguageContext);

  const setLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  return { selectedLanguage: state.selectedLanguage, setLanguage };
};
