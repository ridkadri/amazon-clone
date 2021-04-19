import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
`;

export const LoginContainer = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
`;

export const LoginHeader = styled.h1`
    font-weight: 500;
    margin-bottom: 20px;
`;

export const FormHeader = styled.h5`
    margin-bottom: 5px;
`;

export const FormInput = styled.input`
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
`;

export const FormText = styled.p`
    margin-top: 10px;
    font-size: 12px;
`;

export const SignInButton = styled.button`
    background: #f0c14b;
    border: 1px solid;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
`;

export const RegisterButton = styled.button`
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
`;