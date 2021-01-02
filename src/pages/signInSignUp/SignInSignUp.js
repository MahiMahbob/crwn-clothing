import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import { SignInAndSignUpContainer } from './SignInUpStyle'

const SignInSignUp = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <div>test 2</div>
        </SignInAndSignUpContainer>
    )
}

export default SignInSignUp
