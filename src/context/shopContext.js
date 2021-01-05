import React, { useContext, useReducer, useEffect } from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebaseUtils'
import SHOP_DATA from '../pages/shopPage/shopData'
import { SECTION_DATA } from './sectionData'
import shopReducer from './shopReducer'

const initialState = {
    shopData: SHOP_DATA,
    sections: SECTION_DATA,
    cartItem: JSON.parse(sessionStorage.getItem('cartItems')) || [],
    currentUser: null,
    isOpen: false,
    amountCount: 0,
    total: 0
}

const GlobalContext = React.createContext(initialState)

export const ShopContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shopReducer, initialState)
    const { shopData, sections, currentUser, isOpen, cartItem, amountCount,total } = state

    sessionStorage.setItem('cartItems', JSON.stringify(cartItem))

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
    
    const hideDropDown = () => {
        dispatch({ type: 'HIDE_DROPDOWN' })
    }
    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item })
    }
    const removeItem = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item })
    }
    const clearItem = (item) => {
        dispatch({ type: 'CLEAR_ITEM', payload: item })
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
        dispatch({ type: 'SET_AMOUNT' })
    }, [cartItem])

    const value = {
        shopData,
        sections,
        currentUser,
        signup,
        isOpen,
        hideCartDropDown,
        cartItem,
        addItem,
        removeItem,
        clearItem,
        amountCount,
        hideDropDown,
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

