//import { NavButton } from '../components/navbar/NavbarElement';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { LoginButton, LoginButtonLink } from '../components/navbar/Buttons'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      console.log("hah")
      setToken(token);
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
                    <Box onSubmit={handleSubmit}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField onChange={e => setUserName(e.target.value)}
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <TextField onChange={e => setPassword(e.target.value)}
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

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };




