import React from 'react'
import { MenuItem,Content,Title,SubTitle } from './MenuItemStyles'

const MenuItemComponent = ({title,imageUrl,size}) => {
    return (
        <MenuItem imageUrl={imageUrl} style={size && {height: '300px'}}>
            <Content>
                <Title>{title}</Title>
                <SubTitle>Shop Now</SubTitle>
            </Content>
        </MenuItem>
    )
}

export default MenuItemComponent
