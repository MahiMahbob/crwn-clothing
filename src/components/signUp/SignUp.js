import React, { useState } from 'react'
import { useContextValue } from '../../context/shopContext'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import { SignUpContainer, SignUpTitle } from './SignUpstyles'

const SignUp = () => {

    const [inputVal, setInputVal] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const {signup} = useContextValue()
    const { displayName,email, password, confirmPassword } = inputVal

    const handleChange = event => {
        const { name, value} = event.target;
        setInputVal({...inputVal, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            await signup(email,password,displayName)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='displayName'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp
