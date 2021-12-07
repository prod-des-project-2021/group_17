//import { NavButton } from '../components/navbar/NavbarElement';
import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LoginButton, LoginButtonLink } from '../components/navbar/Buttons'
import { connect } from 'react-redux';
import { useState } from 'react'
import { AuthActions } from '../stores/actions';
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';



function Login(props) {
    const { signIn } = props;
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleClick = async () => {
        signIn(username, password)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setUsername(e.target.value)
    }
    
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
                                onChange={handleEmailChange}
                                id="outlined-required"
                                label="Email"
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <TextField
                                onChange={handlePasswordChange}
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <div>
                            {/* <NavButton> */}
                            <LoginButton onClick={handleClick}>
                                <LoginButtonLink to='/welcome'>Login</LoginButtonLink>
                            </LoginButton>
                         </div>
                         <div>
                            <RegisterButton >
                                <RegisterButtonLink to='/register'>Register</RegisterButtonLink>
                            </RegisterButton> 
                            {/* </NavButton> */}
                       </div>
                    </Box>

                </div>
            </ContentElement>
        </Container>
    )
}

const mapDispatchToProps = {
    signIn: AuthActions.signIn,

}

export default connect(null, mapDispatchToProps)(Login);
