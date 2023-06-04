import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrangChu from './components/TrangChu';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TrangChu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
