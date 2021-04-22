import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;

    @media(max-width: 600px) {
        height: 80px;
        margin: 0;
    } 
`;  

export const Logo = styled.img` 
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 10px;
`;

export const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
    outline: none;
`;

export const StyledIcon = styled(Button)`
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;

`;

export const HeaderNav = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const HeaderOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: row;
        margin: 0;
    }
`;

export const OptionLineOne = styled.span`
    font-size: 10px;

    @media (max-width: 600px) {
       padding: 0 10px;
       
    }
`;

export const OptionLineTwo = styled.span`
    font-size: 13px;
    font-weight: 800;

    @media (max-width: 600px) {
       
    }
`;

export const OptionBasket = styled.div`
    color: white;
    display: flex;
    align-items: center;
`;

export const OptionBasketCount = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`;