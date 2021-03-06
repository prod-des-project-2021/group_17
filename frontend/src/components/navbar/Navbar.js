import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { AuthActions } from '../../stores/actions';
import { Nav, NavLink, NavButton, NavMenu, Bars, NavMenuLoggedInUser } from './NavbarElement';


const Navbar = (props) => {
    const { signOut } = props;
    const [fName, setFName] = useState("");
    const [credits, setCredit] = useState("");
    const { user } = props;

    useEffect(
        () => {
            if (user) {
                setFName(user.first_name);
                setCredit(user.credits)
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user]
    );

    return (
        <>
            <Nav>
                <NavLink to='/welcome'>
                    <h1>PSOAStore</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/dashboard'>
                        Products
                    </NavLink>
                    <NavLink to='/cart'>
                        Cart
                    </NavLink>
                    <NavLink to='/userprofile'>
                        Userprofile
                    </NavLink>
                </NavMenu>
                <NavMenuLoggedInUser>
                <p> Hi {fName}, your current credit balance is: {credits}  €</p>
                </NavMenuLoggedInUser>
                <NavButton > 
                    <Button sx={{ color: "green" }} onClick={signOut}>Logout</Button>
                </NavButton>
            </Nav>
        </>
    )
}

const mapDispatchToProps = {
    signOut: AuthActions.signOut
};
const mapStateToProps = ({ auth }) => ({
    user: auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
