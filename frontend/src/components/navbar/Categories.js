import React from 'react';
import { CatNav, CatLink, CatMenu } from './CategoriesElement';

const Categories = () => {
    return (
        <>
            <CatNav>
                {/* <CatMenu>  */}
                    <CatLink to='/clothes' activeStyle>
                        Clothes
                    </CatLink>
                    <CatLink to='/games' activeStyle>
                        Games
                    </CatLink>
                    <CatLink to='/home' activeStyle>
                        Home
                    </CatLink>
                    <CatLink to='/kitchen' activeStyle>
                        Kitchen
                    </CatLink>
                    <CatLink to='/sport' activeStyle>
                        Sport
                    </CatLink>
                {/* </CatMenu>  */}
            </CatNav>
        </>
    )
}

export default Categories