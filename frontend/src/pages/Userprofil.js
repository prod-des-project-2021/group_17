import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'

const Userprofil = () => {
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
                    <h1>Userprofil</h1>

                </div>
            </ContentElement>
        </Container>

    )
}

export default Userprofil
