import React from 'react'
import { withRouter } from 'react-router-dom'
import { MenuItem,Content,Title,SubTitle,BackgroundImageContainer } from './MenuItemStyles'

const MenuItemComponent = ({title,imageUrl,size,linkUrl,history,match}) => {
    return (
        <MenuItem size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer imageUrl={imageUrl} className='background-image'/>
            <Content className='content'>
                <Title>{title.toUpperCase()}</Title>
                <SubTitle>Shop Now</SubTitle>
            </Content>
        </MenuItem>
    )
}

export default withRouter(MenuItemComponent)
