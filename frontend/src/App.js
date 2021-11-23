import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Searchbar from './pages/Searchbar';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Userprofil from './pages/Userprofil';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path='/home' exact element={<Homepage/>}/>
        <Route path='/searchbar' element={<Searchbar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/userprofil' element={<Userprofil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
