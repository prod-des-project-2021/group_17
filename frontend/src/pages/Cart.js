import { Container } from '@mui/material'
import React from 'react'


const Cart = () => {
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
           <h1>Cart</h1>
        </div>
        </Container>
    )
}

export default Cart
