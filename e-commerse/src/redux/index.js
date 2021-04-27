import {createStore} from "redux"

const initialState = {
    catalog: [],
    cart: [],
    favorite: [],
    based: "RUB",
    rates: {
        EUR: 0.011,
        RUB: 1,
        USD: 0.0013,
    }
}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATALOG":
            return {...state, catalog: action.catalog}
        case "ADD_TO_CART":
            const findProduct = state.cart.find(el => el.id === action.product.id)
            if (findProduct) {
                findProduct.quantity++
                return {...state, cart: state.cart.map(el => el.id === findProduct.id ? findProduct : el)}

            } else {
                return {...state, cart: [...state.cart, {...action.product, quantity: 1}]}
            }
        case "DELETE_ITEM":
            return {...state, cart: state.cart.filter(el => el.id !== action.id)}
        case "REMOVE_FROM_CART":
            const removeProduct = state.cart.find(el => el.id === action.id)
            removeProduct.quantity--
            if (removeProduct.quantity === 0) {
                return {...state, cart: state.cart.filter(el => el.id !== action.id)}
            }
            return {...state, cart: state.cart.map(el => el.id === removeProduct.id ? removeProduct : el)}
        case "SORT_CATALOG":
            const newCatalog = [...state.catalog]
            if (action.payload === "highest") {
                newCatalog.sort((a, b) => a.price < b.price ? -1 : 1)
            }
            if (action.payload === "lowest") {
                newCatalog.sort((a, b) => a.price > b.price ? -1 : 1)
            }
            if (action.payload === "a-z") {
                newCatalog.sort((a, b) => a.title < b.title ? -1 : 1)
            }
            if (action.payload === "z-a") {
                newCatalog.sort((a, b) => a.title > b.title ? -1 : 1)
            }

            return {...state, catalog: newCatalog}
        case "GET_BASED":
            return {...state, based: action.payload}
        case "ADD_TO_FAVORITE":
            const findFavorite = state.favorite.find(el => el.id === action.product.id)
            if (findFavorite) {
                findFavorite.quantity++
                return {...state, favorite: state.favorite.map(el => el.id === findFavorite.id  ? findFavorite : el)}
            } else {
                return {...state, favorite: [...state.favorite, {...action.product, quantity: 1}]}
            }
        default:
            return state
    }
}
export const store = createStore(shopReducer)