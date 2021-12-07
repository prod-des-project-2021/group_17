import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


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
`; 

export const CatLink = styled(Link)`
    color: #000;
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