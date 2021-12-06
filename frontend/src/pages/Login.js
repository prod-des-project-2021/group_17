//import { NavButton } from '../components/navbar/NavbarElement';
import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { LoginButton, LoginButtonLink } from '../components/navbar/Buttons'
import { connect } from 'react-redux';


function Login(props) {
    const { userReducer } = props;
    return (
        <Container>
            <ContentElement>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '5vh'
                    }}
                >
                    <h1>Welcome!</h1> </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '30vh'
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <div>
                            {/* <NavButton> */}
                            <LoginButton>
                                <LoginButtonLink to='/home'>Login</LoginButtonLink>
                            </LoginButton>
                            {/* </NavButton> */}
                        </div>
                    </Box>

                </div>
            </ContentElement>
        </Container>
    )
}

const mapStateToProps = ({ auth }) => ({
    userReducer: auth
});

export default connect(mapStateToProps, null)(Login);
