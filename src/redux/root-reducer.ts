import { combineReducers } from 'redux';

import useShoppingCart from './shoppingCart/reducer'; 
import useToggleLateralMenu from "./toggleLateralMenu/reducer";
import togglePaymentMethod from './togglePaymentMethod/reducer';



const rootReducer = combineReducers({useShoppingCart, useToggleLateralMenu, togglePaymentMethod});

export default rootReducer;