const {createStore} from "redux"
const initialState = {
    catalog: [],
    cart: []
}
const shopReducer = () => {
switch (action.type){
    case "SET_CATALOG":
        return {...state,catalog:action.catalog}
    case "ADD_TO_CART":
        return {...state,cart:[state.cart,action.product]}

}
}
const store = createStore(shopReducer())