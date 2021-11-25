import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'

const Games = () => {
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
                    <h1>Games</h1>
                </div>
            </ContentElement>
        </Container>
    )
}

export default Games