import React, { useContext, useReducer, useEffect } from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebaseUtils'
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
        const unsubs = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    dispatch({type: 'SET_USER', payload: {id: snapshot.id, ...snapshot.data() }})
                })
                
            }
            
            else {
                dispatch({type: 'SET_USER', payload: userAuth})
            }
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

