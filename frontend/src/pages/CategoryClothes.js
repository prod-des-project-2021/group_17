import { Container } from '@mui/material'
import React from 'react'

const Clothes = () => {
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
           <h1>Clothes</h1>
        </div>
        </Container>
    )
}

export default Clothes