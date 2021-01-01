import React from 'react'
import { CollectionItem, Image, CollectionFooter,Name,Price } from './CollectionPrevItemStyle'

export const CollectionPrevItem = ({name, price, imageUrl}) => {
    
    return (
        <CollectionItem>
            <Image imageUrl={imageUrl} />
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </CollectionFooter>
        </CollectionItem>
    )
}
