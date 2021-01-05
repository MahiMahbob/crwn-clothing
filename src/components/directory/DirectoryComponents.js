import React from 'react'
import { useContextValue } from '../../context/shopContext'
import MenuItemComponent from '../menuitem/MenuItemComponent'
import { DirectoryMenu } from './DirectoryStyles'

const DirectoryComponents = () => {
    const {sections} = useContextValue()
    return (
        <DirectoryMenu>
           {sections.map(({title,imageUrl,size,id}) => (
               <MenuItemComponent key={id} title={title} imageUrl={imageUrl} size={size} />
           ))}     
        </DirectoryMenu>
    )
}

export default DirectoryComponents
