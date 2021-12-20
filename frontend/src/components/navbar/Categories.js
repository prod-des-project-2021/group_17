import React from 'react';
import { CatNav, CatLink, CatBars, CatMenu } from './CategoriesElement';

const Categories = () => {
    return (
        <>
            <CatNav>
                <CatBars />
                <CatMenu>
                    <CatLink to='/clothes'>
                        Clothes
                    </CatLink>
                    <CatLink to='/games'>
                        Games
                    </CatLink>
                    <CatLink to='/home'>
                        Home
                    </CatLink>
                    <CatLink to='/kitchen'>
                        Kitchen
                    </CatLink>
                    <CatLink to='/sport'>
                        Sport
                    </CatLink>
                    <CatLink to='/other'>
                        Other
                    </CatLink>
                </CatMenu>
            </CatNav>
        </>
    )
}

export default Categories