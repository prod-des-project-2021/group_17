import styled from 'styled-components';

export const Box = styled.div`
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
                            minmax(400px, 1fr));
    grid-gap: 30px;
    

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



