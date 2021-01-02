import React, { useContext, useReducer, useEffect } from 'react'
import { auth } from '../firebase/firebaseUtils'
import SHOP_DATA from '../pages/shopPage/shopData'
import shopReducer from './shopReducer'

const initialState = {
    shopData: SHOP_DATA,
    currentUser: null
}

const GlobalContext = React.createContext(initialState)

export const ShopContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(shopReducer, initialState)

    useEffect(() => {
        const unsubs = auth.onAuthStateChanged(user => {
            dispatch({type: 'SET_USER', payload: user})
        })

        return () => {
            unsubs()
        }
    }, [])

    const value = {
        shopData: state.shopData,
        currentUser: state.currentUser
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

