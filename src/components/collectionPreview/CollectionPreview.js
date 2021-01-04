import React from 'react'
import { CollectionPrevItem } from '../collectionPrevItem/CollectionPrevItem'
import { CollectionPrevContainer,Title,Preview} from './CollectionPreviewStyle'

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPrevContainer>
            <Title>{title.toUpperCase()}</Title>
            <Preview>
                {items.filter((item, indx) => indx < 4).map((item) => (
                    <CollectionPrevItem key={item.id} item={item} />
                ))}
            </Preview>
        </CollectionPrevContainer>
    )
}

export default CollectionPreview
