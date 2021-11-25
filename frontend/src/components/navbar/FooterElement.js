import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const BoxFooter = styled.div`
    padding: 4px 60px;
    background: #CCCCCC;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    width: 100%;
    z-index: 10;


    @media (max-width: 100px) {
        padding: 70px 30px;
    }
`;

export const ContainerFooter = styled.div`    
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
    
`

export const ColumnFooter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
   
`;

export const RowFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(400px, 1fr));
    grid-gap: 30px;
    

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));
    }
`;

export const FooterLink = styled(Link)`
    color: #000;
    display: block;
    font-family: 'Sora', sans-serif;
    margin-bottom: 20px;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
    padding: 0 1rem;
    

    &.active {
        color: #006600;
    } 
`;



