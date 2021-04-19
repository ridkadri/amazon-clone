import React,{useState} from 'react';
import {
    Container, 
    Logo, 
    LoginContainer, 
    LoginHeader, 
    FormHeader, 
    FormInput, 
    FormText, 
    SignInButton, 
    RegisterButton
} from './styles/Login';

import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error =>alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=> {
                //succesfully created a new user with email and pass
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //firebase register code
    }

    return (
        <Container>
            <Link to='/'>
            <Logo
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt=''
            />
            </Link>
            <LoginContainer>
                <LoginHeader>Sign-In</LoginHeader>
                
                <form>
                    <FormHeader>E-mail</FormHeader>
                    <FormInput
                        type='text' 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                    />

                    <FormHeader>Password</FormHeader>
                    <FormInput 
                        type='password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <SignInButton
                        type='submit'
                        onClick={signIn} 
                        className='login_signInButton'>
                        Sign In
                    </SignInButton>

                    <FormText> By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</FormText>

                    <RegisterButton 
                        onClick={register}
                        className='login_registerButton'>
                        Create your Amazon Account
                    </RegisterButton>
                </form>
            </LoginContainer>
        </Container>
    )
}

export default Login;
