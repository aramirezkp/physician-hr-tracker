import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js'; 
import Footer from './components/footer.js';
import LoginPage from'./pages/LoginPage.js';
import Home from './pages/HomePage';
import About from './pages/About';
import Dashboard from './pages/PhrDashboard.js';
import Onboard from './pages/Onboard';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboard" element={<Onboard />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
