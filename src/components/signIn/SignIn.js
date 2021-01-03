import React, { useState} from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import { SignInContainer, SignInTitle,ButtonsBarContainer } from './SignInStyles'

const SignIn = () => {

    const [inputVal, setInputVal] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(null)
    
    const { email, password } = inputVal

    const handleChange = e => {
        const { name, value } = e.target
        setInputVal({...inputVal, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            setError('');
            await auth.signInWithEmailAndPassword(email, password)
        }catch (err){
            setError(err.message);
        }

    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
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
                    <CustomButton as='div' onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn
