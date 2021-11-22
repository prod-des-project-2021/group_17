import React from 'react';
import { Nav, NavLink, NavButton, NavButtonLink, NavMenu, Bars } from './NavbarElement';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to='/'>
                  <h1>PSOAStore</h1>
              </NavLink>
              <Bars />
              <NavMenu>
                  <NavLink to='/searchbar' activeStyle>
                      Searchbar
                  </NavLink>
                  <NavLink to='/cart' activeStyle>
                      Cart 
                  </NavLink>
                  <NavLink to='/userprofil' activeStyle>
                      Userprofil
                  </NavLink>
              </NavMenu>
              <NavButton>
                  <NavButtonLink to='/login'>Login</NavButtonLink>
              </NavButton>
          </Nav>
        </>
    )
}

export default Navbar
