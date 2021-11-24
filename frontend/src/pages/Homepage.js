import { Container } from '@mui/material'
import React from 'react'
import { RowHomepage } from './PagesElement'

const Homepage = () => {
    return (
        <Container>
            <RowHomepage>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >

                    <h1>Homepage</h1>


                </div>
            </RowHomepage>
            <RowHomepage>
                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                > */}

                    <h1>blabla</h1>


                {/* </div> */}
            </RowHomepage>
        </Container>
    )
}

export default Homepage


