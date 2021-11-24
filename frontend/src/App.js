import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Searchbar from './pages/Searchbar';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Userprofil from './pages/Userprofil';
import Footer from './components/navbar/Footer';
import ContactUs from './pages/ContactUs';
import LegalNotice from './pages/LegalNotice';


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/searchbar' element={<Searchbar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/userprofil' element={<Userprofil />} />
        </Routes>
        <Footer />
        <Routes>
          <Route path='/legalnotice' element={<LegalNotice />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
