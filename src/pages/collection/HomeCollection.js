import React from 'react'
import { CollectionPrevItem } from '../../components/collectionPrevItem/CollectionPrevItem'
import { useContextValue } from '../../context/shopContext'
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './HomCollectionStyle'

const HomeCollection = ({match}) => {
    const {shopData} = useContextValue()
    const collection = shopData[match.params.collectionId]
    const {items, title} = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionPrevItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export default HomeCollection
