import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import { useContextValue } from '../../context/shopContext'
import HomeCollection from '../collection/HomeCollection'

const ShopPage = ({match}) => {
    const {loading} = useContextValue()

    if(loading){
        return (
            <h3>Loading</h3>
        )
    }else{
        return (
            <div className='shop-page'>
                <Route exact path={match.path} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={HomeCollection} />
            </div>
        )
    }
}

export default ShopPage
