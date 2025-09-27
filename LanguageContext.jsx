import { useState, useContext, createContext } from 'react';

// 1. Create the context
const LanguageContext = createContext();

// 2. Provider component
export function LanguageProvider({ children }) {
   const [language, setLanguage] = useState('en'); // keep only the code

   function toggleLanguage() {
      setLanguage((l) => (l === 'en' ? 'es' : 'en'));
   }

   return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
         {children}
      </LanguageContext.Provider>
   );
}

// 3. Custom hook (camelCase name!)
export function useLanguage() {
   return useContext(LanguageContext);
}
