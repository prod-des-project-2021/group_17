import React from 'react';
import { CatNav, CatLink, CatBars, CatMenu } from './CategoriesElement';

const Categories = () => {
    return (
        <>
            <CatNav>
                <CatBars />
                <CatMenu>
                    <CatLink to='/home/clothes'>
                        Clothes
                    </CatLink>
                    <CatLink to='/home/games'>
                        Games
                    </CatLink>
                    <CatLink to='/home/home'>
                        Home
                    </CatLink>
                    <CatLink to='/home/kitchen'>
                        Kitchen
                    </CatLink>
                    <CatLink to='/home/sport'>
                        Sport
                    </CatLink>
                </CatMenu>
            </CatNav>
        </>
    )
}

export default Categories