import { LanguageProvider, useLanguage } from '../LanguageContext';

// Consumer component (uses the context)
function LanguageConsumer() {
   const { language, toggleLanguage } = useLanguage();

   return (
      <div className='min-h-screen bg-black flex flex-col items-center justify-center'>
         <div className='text-xl font-bold text-white'>
            {language === 'en' ? 'English' : 'Spanish'}
         </div>

         <button
            onClick={toggleLanguage}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
         >
            Switch Language
         </button>
      </div>
   );
}

// Root app
export default function App() {
   return (
      <LanguageProvider>
         <LanguageConsumer />
      </LanguageProvider>
   );
}
