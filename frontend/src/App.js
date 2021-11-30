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
import Contactus from './pages/ContactUs';
import LegalNotice from './pages/LegalNotice';
import Feedback from './elements/Feedback';
import Categories from './components/navbar/Categories';
import CategoryClothes from './pages/CategoryClothes';
import CategoryGames from './pages/CategoryGames';
import CategoryHome from './pages/CategoryHome';
import CategoryKitchen from './pages/CategoryKitchen';
import CategorySport from './pages/CategorySport';
import Clothes from './pages/CategoryClothes';
import Startpage from './pages/Startpage';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Startpage />} />
        <Route path='/home' element={<Homepage />} >
          <Route path='clothes' element={<Clothes />} />
          <Route path='games' element={<CategoryGames />} />
          <Route path='home' element={<CategoryHome />} />
          <Route path='kitchen' element={<CategoryKitchen />} />
          <Route path='sport' element={<CategorySport />} />
        </Route>
        <Route path='/searchbar' element={<Searchbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/userprofil' element={<Userprofil />} />
      </Routes>
      <Footer />
      <Routes>
        <Route path='/legalnotice' element={<LegalNotice />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      {/* <Categories />
        <Routes>
          <Route path='/clothes' element={<CategoryClothes />} />
          <Route path='/games' element={<CategoryGames />} />
          <Route path='/home' element={<CategoryHome />} />
          <Route path='/kitchen' element={<CategoryKitchen />} />
          <Route path='/sport' element={<CategorySport />} />
        </Routes> */}
    </BrowserRouter>
  );
}

export default App;
