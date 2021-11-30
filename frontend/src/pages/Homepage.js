import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Container } from '@mui/material';
import { RowHomepage } from './PagesElement';
import Categories from '../components/navbar/Categories';
import CategoryClothes from './CategoryClothes';
import CategoryGames from './CategoryGames';
import CategoryHome from './CategoryHome';
import CategoryKitchen from './CategoryKitchen';
import CategorySport from './CategorySport';
import { ContentElement } from '../components/navbar/ContentElement';
// import HoverRating from '../elements/Rateing';

const Homepage = () => {
    return (
        <Container>
            <ContentElement>
                    <Categories />

                <RowHomepage>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90vh'
                        }}
                    >

                        <h1>Products</h1>


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
            </ContentElement>
        </Container>
    )
}

export default Homepage


