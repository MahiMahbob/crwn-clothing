import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { useContextValue } from '../../context/shopContext'
import { auth } from '../../firebase/firebaseUtils'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyle'

const HeaderComponent = () => {
    const { currentUser } = useContextValue()
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default HeaderComponent
