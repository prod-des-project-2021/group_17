import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'

const Login = () => {
    return (
        <Container>
            <ContentElement>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <h1>Login</h1>
                </div>
            </ContentElement>
        </Container>
    )
}

export default Login
