/* import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Foot = styled.nav`
    background: #ffffff;
    margingTop: -50px
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const FooterLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    } 
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #006600;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
`;

export const FooterMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`; */

import styled from 'styled-components';

export const Box = styled.div`
    padding: 4px 60px;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    width: 100%;


    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fffff;
    font-family: 'Sora', sans-serif;
    margin-bottom: 20px;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;

    &.active {
        color: #006600;
    } 
`;



