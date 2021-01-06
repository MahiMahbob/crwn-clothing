import React from 'react'
import { useContextValue } from '../../context/shopContext'
import CollectionPreview from '../collectionPreview/CollectionPreview'
import { CollectionsOverviewContainer } from './OverViewStyle'

const CollectionOverview = () => {
    const {shopData} = useContextValue()
    const collection = Object.keys(shopData).map(key => shopData[key])
    return (
        <CollectionsOverviewContainer>
            {collection.map(({id, ...items}) => (
                <CollectionPreview key={id} {...items} />
            ))}
        </CollectionsOverviewContainer>
    )
}

export default CollectionOverview
