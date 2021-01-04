import React from 'react'
import { useContextValue } from '../../context/shopContext'
import { CollectionItem, Image, CollectionFooter,Name,Price, AddItemButton } from './CollectionPrevItemStyle'

export const CollectionPrevItem = ({item}) => {
    const {addItem} = useContextValue()
    const {name, price, imageUrl} = item
    return (
        <CollectionItem>
            <Image className='image' imageUrl={imageUrl} />
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </CollectionFooter>
            <AddItemButton inverted onClick={() => addItem(item)}>
                ADD TO CART
            </AddItemButton>
        </CollectionItem>
    )
}
