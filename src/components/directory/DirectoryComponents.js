import React from 'react'
import { useContextValue } from '../../context/shopContext'
import MenuItemComponent from '../menuitem/MenuItemComponent'
import { DirectoryMenu } from './DirectoryStyles'

const DirectoryComponents = () => {
    const {sections} = useContextValue()
    return (
        <DirectoryMenu>
           {sections.map(({id, ...props}) => (
               <MenuItemComponent key={id} {...props} />
           ))}     
        </DirectoryMenu>
    )
}

export default DirectoryComponents
