// pages/_app.js
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import NotFoundErrorBoundary from "../components/NotFoundErrorBoundary";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <NotFoundErrorBoundary>
      <Component {...pageProps} />
      </NotFoundErrorBoundary>
    </AnimatePresence>
  );
}

export default MyApp;
