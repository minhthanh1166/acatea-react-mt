import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrangChu from './components/TrangChu';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TrangChu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
