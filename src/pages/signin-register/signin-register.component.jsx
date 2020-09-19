
import React from 'react';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-register.styles.scss';

const SigninAndRegisterPage = () => (
    <div className='sign-in-page'>
        <Signin></Signin>
        <SignUp></SignUp>
    </div>
)

export default SigninAndRegisterPage;