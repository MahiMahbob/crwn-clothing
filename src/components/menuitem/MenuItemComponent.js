import React from 'react'
import { MenuItem,Content,Title,SubTitle,BackgroundImageContainer } from './MenuItemStyles'

const MenuItemComponent = ({title,imageUrl,size}) => {
    return (
        <MenuItem size={size}>
            <BackgroundImageContainer imageUrl={imageUrl} className='background-image'/>
            <Content className='content'>
                <Title>{title.toUpperCase()}</Title>
                <SubTitle>Shop Now</SubTitle>
            </Content>
        </MenuItem>
    )
}

export default MenuItemComponent
