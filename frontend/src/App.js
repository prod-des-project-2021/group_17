import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Searchbar from './pages/Searchbar';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Userprofil from './pages/Userprofil';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch> 
        <Route path='/' exact component={Homepage}/>
        <Route path='/searchbar' component={Searchbar}/>
        <Route path='/login' component={Login}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/userprofil' component={Userprofil}/>
      </Switch>
    </Router>
  );
}

export default App;
