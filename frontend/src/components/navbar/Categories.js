import React from 'react';
import { CatNav, CatLink } from './CategoriesElement';

const Categories = () => {
    return (
        <>
            <CatNav>
                {/* <CatMenu>  */}
                    <CatLink to='/home/clothes' activeStyle>
                        Clothes
                    </CatLink>
                    <CatLink to='/home/games' activeStyle>
                        Games
                    </CatLink>
                    <CatLink to='/home/home' activeStyle>
                        Home
                    </CatLink>
                    <CatLink to='/home/kitchen' activeStyle>
                        Kitchen
                    </CatLink>
                    <CatLink to='/home/sport' activeStyle>
                        Sport
                    </CatLink>
                {/* </CatMenu>  */}
            </CatNav>
        </>
    )
}

export default Categories