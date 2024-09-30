/**
 * Utility functions for language-related actions.
 */

/**
 * Function to get a list of available languages.
 * @returns {Array} - Array of language objects { code, name }.
 */
export const getAvailableLanguages = () => {
    return [
      { code: 'fr', name: 'French' },
      { code: 'it', name: 'Italian' },
      { code: 'ja', name: 'Japanese' },
      { code: 'id', name: 'Indonesian' },
      { code: 'zh', name: 'Mandarin' },
      { code: 'en', name: 'English' },
      { code: 'ko', name: 'Korean' },
      { code: 'es', name: 'Spanish' },
    ];
  };
  
  /**
   * Function to translate a given message into a specified language.
   * @param {string} message - The message to be translated.
   * @param {string} languageCode - The target language code (e.g., 'fr' for French).
   * @returns {Promise<string>} - Translated message.
   */
  export const translateMessage = async (message, languageCode) => {
    try {
      const response = await fetch(`https://api.translation.com/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_TRANSLATION_API_KEY}`, // Use your translation API key
        },
        body: JSON.stringify({ message, languageCode }),
      });
      
      if (!response.ok) {
        throw new Error('Translation failed');
      }
  
      const data = await response.json();
      return data.translatedMessage;
    } catch (error) {
      console.error('Error translating message:', error);
      throw error; // Re-throw for handling elsewhere
    }
  };
  