import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CategoryGames from './CategoryGames'
import CategoryKitchen from './CategoryKitchen'
import CategorySport from './CategorySport'
import CategoryHome from './CategoryHome'
import Categories from '../components/navbar/Categories'


const Clothes = () => {
    return (
        <> <Container>
            <ContentElement>
               
                    <Categories />
                    <Routes>
                        {/* <Route path='/' exact element={<CategoryClothes />} /> */}
                        <Route path='/games' element={<CategoryGames />} />
                        <Route path='/home' element={<CategoryHome />} />
                        <Route path='/kitchen' element={<CategoryKitchen />} />
                        <Route path='/sport' element={<CategorySport />} />
                    </Routes>
                


                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <h1>Clothes</h1>
                </div>

            </ContentElement>
        </Container>
        </>

    )
}

export default Clothes