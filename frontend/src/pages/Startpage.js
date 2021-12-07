import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'


const Startpage = () => {

    return (
        <Container>
            <ContentElement>
                <div>
                    <h1>Hello!</h1>
                    <br />
                    <p>Welcome to the official website of PSOAStore. <br />
                        Here students of Oulu University of Applied Sciences (OAMK) can buy second hand goods or sell their own unwanted goods. <br />
                        This is an ideal way to cope with living in the PSOAS dormitories,
                        as you don't have to buy all the new items and can sell everything again at the end of your stay if you want to.
                    </p>
                    <br />
                    <p>Happy shopping!</p>
                    <p>PSOAStore Team</p>
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </ContentElement>
        </Container>

    )
}

export default Startpage


