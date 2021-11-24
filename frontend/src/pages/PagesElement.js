import styled from 'styled-components';

export const RowHomepage = styled.div`
    display: grid;
    
    height: '900vh'
    grid-template-columns: repeat(auto-fill,
                            minmax(400px, 1fr));
    grid-gap: 3000px;
    

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));
    }
`;