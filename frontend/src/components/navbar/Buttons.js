import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


/* export const NavButton = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 4px 60px;
    z-index: 10;
`; */

export const LoginButton = styled.nav`
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 24px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const LoginButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 4px;
    background: #006600;     
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8c8c8c;
        color: #010606;
    }
`;
export const RegisterButton = styled.nav`
    display: flex;
    align-items: center;
    align-content: center;
    margin-right: 24px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const RegisterButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 4px;
    background: #006600;     
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8c8c8c;
        color: #010606;
    }
`;