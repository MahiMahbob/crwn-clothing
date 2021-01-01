import React, { useContext, useReducer } from 'react'
import SHOP_DATA from '../pages/shopPage/shopData'
import shopReducer from './shopReducer'

const initialState = {
    shopData: SHOP_DATA
}

const GlobalContext = React.createContext()

export const ShopContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(shopReducer, initialState)

    const value = {
        shopData: state.shopData
    }

    return (
        <GlobalContext.Provider value={value} >
            {children}
        </GlobalContext.Provider>
    )

}

export function useContextValue() {
    return useContext(GlobalContext)
}

