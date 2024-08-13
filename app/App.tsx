import './globals.css';
import type { AppProps } from 'next/app';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './home';
// import GalleryPage from './components/All Gallery/all-gallery';
// import other pages...

function App({ Component, pageProps }: AppProps) {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/allGallery" element={<GalleryPage />} /> */}
        {/* define other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
