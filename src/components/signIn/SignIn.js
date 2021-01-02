import React, { useState } from 'react'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import { SignInContainer, SignInTitle } from './SignInStyles'

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
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </SignInContainer>
    )
}

export default SignIn
