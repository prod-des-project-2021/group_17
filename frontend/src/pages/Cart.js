import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Cart = () => {
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent:'center', 
                alignItems: 'center',
                height: '90vh'
                }}
        >
           <h1>Cart</h1>
           <ShoppingCartOutlinedIcon/>
        </div>
    )
}

export default Cart
