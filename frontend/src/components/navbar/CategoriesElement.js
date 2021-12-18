import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const CatNav = styled.nav`
    position: fixed;
    top: 80px;
    width: 100%;
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 4px 60px;
    z-index: 10;
    left: 0;
`; 

export const CatLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #006600;
    } 
`;

export const CatBars = styled(FaBars)`
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

export const CatMenu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;