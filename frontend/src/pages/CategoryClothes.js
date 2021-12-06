// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CategoryGames from './CategoryGames'
// import CategoryKitchen from './CategoryKitchen'
// import CategorySport from './CategorySport'
// import CategoryHome from './CategoryHome'
// import Categories from '../components/navbar/Categories'
// import { Outlet } from 'react-router'
import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'

const Clothes = () => {
    return (
        <> <Container>
            <ContentElement>
                {/* <Outlet/>  */}
                <div
                    /* style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }} */
                >
                    <h1>Clothes</h1>
                </div>

            </ContentElement>
        </Container>
        </>

    )
}

export default Clothes