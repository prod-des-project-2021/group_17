import { Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../../stores/actions';
import { Nav, NavLink, NavButton, NavButtonLink, NavMenu, Bars } from './NavbarElement';

const Navbar = (props) => {
    const {signOut} = props;
    return (
        <>
            <Nav>
                <NavLink to='/welcome'>
                    <h1>PSOAStore</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Products
                    </NavLink>
                    <NavLink to='/searchbar' activeStyle>
                        Search
                    </NavLink>
                    <NavLink to='/cart' activeStyle>
                        Cart
                    </NavLink>
                    <NavLink to='/userprofile' activeStyle>
                        Userprofile
                    </NavLink>

                </NavMenu>
                <NavButton>
                    <Button onClick={signOut}>Logout</Button>
                </NavButton>
            </Nav>
        </>
    )
}

const mapDispatchToProps = {
	signOut: AuthActions.signOut
};

export default connect(null, mapDispatchToProps)(Navbar);
