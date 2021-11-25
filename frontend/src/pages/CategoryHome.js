import { Container } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <Container>
        <div 
            style={{
                display: 'flex', 
                justifyContent:'center', 
                alignItems: 'center',
                height: '90vh'
                }}
        >
           <h1>Home</h1>
        </div>
        </Container>
    )
}

export default Home