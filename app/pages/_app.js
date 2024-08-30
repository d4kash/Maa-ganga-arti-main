// pages/_app.js
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import NotFoundErrorBoundary from "../components/NotFoundErrorBoundary";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; 
import LanguageSwitcher from './components/LanguageSwitcher';

function MyApp({ Component, pageProps }) {
  return (
      <NotFoundErrorBoundary>
    <AnimatePresence>
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Component {...pageProps} />
      </div>
      </I18nextProvider>
    </AnimatePresence>
      </NotFoundErrorBoundary>
  );
}

export default MyApp;
