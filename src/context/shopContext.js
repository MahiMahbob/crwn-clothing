import React, { useContext, useReducer, useEffect } from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebaseUtils'
import SHOP_DATA from '../pages/shopPage/shopData'
import shopReducer from './shopReducer'

const initialState = {
    shopData: SHOP_DATA,
    cartItem: [],
    currentUser: null,
    isOpen: true,
    total: 0
}

const GlobalContext = React.createContext(initialState)

export const ShopContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shopReducer, initialState)

    const { shopData, currentUser, isOpen, cartItem, total } = state

    const signup = (email, password, displayName) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                return result.user.updateProfile({
                    displayName
                })
            })
    }

    const hideCartDropDown = () => {
        dispatch({ type: 'HIDE_DROPDOWN' })
    }

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item })
    }

    useEffect(() => {
        const unsubs = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user)
                userRef.onSnapshot(snapshot => {
                    dispatch({ type: 'SET_USER', payload: { id: snapshot.id, ...snapshot.data() } })
                })
            }
            else {
                dispatch({ type: 'SET_USER', payload: user })
            }
        })
        return () => {
            unsubs()
        }
    }, [])

    useEffect(() => {
        dispatch({ type: 'SET_TOTAL' })

    }, [cartItem])

    const value = {
        shopData,
        currentUser,
        signup,
        isOpen,
        hideCartDropDown,
        addItem,
        cartItem,
        total
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

