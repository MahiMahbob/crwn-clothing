import React from 'react'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview'
import { useContextValue } from '../../context/shopContext'

const ShopPage = () => {

    const {shopData} = useContextValue()

    return (
        <div className='shop-page'>
            {shopData.map(({id, ...items}) => (
                <CollectionPreview key={id} {...items} />
            ))}
        </div>
    )
}

export default ShopPage
