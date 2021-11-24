import { Container } from '@mui/material'
import React from 'react'

const Searchbar = () => {
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
           <h1>Searchbar</h1>

        </div>
        </Container>
    )
}

export default Searchbar
