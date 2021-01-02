import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { HeaderContainer, LogoContainer,OptionsContainer,OptionLink } from './HeaderStyle'

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default HeaderComponent
