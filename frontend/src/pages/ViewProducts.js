import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import { RegisterButton } from '../components/navbar/Buttons'
import { RegisterButtonLink } from '../components/navbar/Buttons'

function ViewProduct() {
    return (
        <Container>
            <ContentElement>
                <div>
                    <h1>View product</h1>
                    <br />
                    <RegisterButton >
                        <RegisterButtonLink to='/welcome'>Done!</RegisterButtonLink>
                    </RegisterButton>
                </div>
            </ContentElement>
        </Container>
    )
}

export default ViewProduct