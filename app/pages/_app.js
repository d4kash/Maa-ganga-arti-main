// // pages/_app.js
// import '../styles/globals.css';
// import { AnimatePresence } from 'framer-motion';
// import NotFoundErrorBoundary from "../components/NotFoundErrorBoundary";
// import { I18nextProvider } from 'react-i18next';
// import '../i18n'; 
// import { appWithTranslation } from 'next-i18next';
// // import '../i18n';
// import LanguageSwitcher from './components/LanguageSwitcher';

// function MyApp({ Component, pageProps }) {
//   console.log('Custom _app.js is running');
//   return (
//     <div className="App">
//       <NotFoundErrorBoundary>
//     {/* <I18nextProvider i18n={i18n}> */}
//     <AnimatePresence>
//       <Component {...pageProps} />
//     </AnimatePresence>
//       {/* </I18nextProvider> */}
//       </NotFoundErrorBoundary>
//       </div>
//   );
// }

// export default appWithTranslation(MyApp);
