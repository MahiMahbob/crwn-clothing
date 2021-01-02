import React, { useState } from 'react'
import { signInWithGoogle } from '../../firebase/firebaseUtils'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import { SignInContainer, SignInTitle,ButtonsBarContainer } from './SignInStyles'

const SignIn = () => {

    const [inputVal, setInputVal] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setInputVal({ [name]: value })
    }

    const { email, password } = inputVal

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    handleChange={handleChange}
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn
