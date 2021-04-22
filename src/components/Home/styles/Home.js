import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;

    @media(max-width: 600px) {
        display: block;
        margin: 0;
        
    }   
    
`;

export const Image = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

   @media (max-width: 600px) {
        margin-bottom: 5px;
   }
    
`;

export const Row = styled.div`
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;

    @media (max-width: 600px) {
        display: block;
        margin: 0;
    }
    
`;


