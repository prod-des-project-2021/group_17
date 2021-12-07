import React from 'react';
import { CatNav, CatLink } from './CategoriesElement';

const Categories = () => {
    return (
        <>
            <CatNav>
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
            </CatNav>
        </>
    )
}

export default Categories