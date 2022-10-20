import { combineReducers } from "redux";
import { restaurantReducer, restaurantDetailReducer,selectedCartItemsReducer  } from "./resturantReducer";

const reducers = combineReducers({
    restaurantData:restaurantReducer,
    restaurantDetail:restaurantDetailReducer,
    cartItems:selectedCartItemsReducer 
})

const rootReducer = (state,action) => {
    return reducers(state, action)
}


export default rootReducer; 