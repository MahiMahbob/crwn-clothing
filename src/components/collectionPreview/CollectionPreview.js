import React from 'react'
import { CollectionPrevItem } from '../collectionPrevItem/CollectionPrevItem'
import { CollectionPrevContainer,Title,Preview} from './CollectionPreviewStyle'

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPrevContainer>
            <Title>{title.toUpperCase()}</Title>
            <Preview>
                {items.filter((item, indx) => indx < 4).map(({id, ...otherProps}) => (
                    <CollectionPrevItem key={id} {...otherProps} />
                ))}
            </Preview>
        </CollectionPrevContainer>
    )
}

export default CollectionPreview
