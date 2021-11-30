import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'

const Startpage = () => {
    return (
        <Container>
            <ContentElement>
                <div
                    /* style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }} */
                >
                    <h1>Startpage</h1>
                    <br/>
                    <p>Welcome to the official website of PSOAStore. <br/> 
                    Here students of Oulu University of Applied Sciences (OAMK) can buy second hand goods or sell their own unwanted goods. <br/>
                     This is an ideal way to cope with living in the PSOAS dormitories,
                     as you don't have to buy all the new items and can sell everything again at the end of your stay if you want to. 
                    </p>
                    <br/>
                    <h3>Happy shopping!</h3>
                    <p>PSOAStore Team</p>
                    <br/>
                    <br/>
                    <h3>Take a look at our most wanted products </h3>
                    


                </div>
            </ContentElement>
        </Container>
    )
}

export default Startpage