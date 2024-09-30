export const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocal = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const removeFromLocal = (key) => {
    localStorage.removeItem(key);
  };
  