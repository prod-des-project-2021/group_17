import { Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../../stores/actions';
import { Nav, NavLink, NavButton, NavMenu, Bars } from './NavbarElement';

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
                    <NavLink to='/home'>
                        Products
                    </NavLink>
                    <NavLink to='/searchbar'>
                        Search
                    </NavLink>
                    <NavLink to='/cart'>
                        Cart
                    </NavLink>
                    <NavLink to='/userprofile'>
                        Userprofile
                    </NavLink>

                </NavMenu>
                <NavButton>
                    <Button sx={{ color: "green" }} onClick={signOut}>Logout</Button>
                </NavButton>
            </Nav>
        </>
    )
}

const mapDispatchToProps = {
	signOut: AuthActions.signOut
};

export default connect(null, mapDispatchToProps)(Navbar);
