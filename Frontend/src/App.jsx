import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import MenuPage from './components/MenuPage';
import Login from './components/Login';
import QRCodeModal from './components/QrCodeModal';
import DisplayMenu from './components/DisplayMenu'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/qrcode" element={<QRCodeModal />} />
        <Route path="/displayMenu" element={<DisplayMenu />} /> {/* Add route for DisplayMenu */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
