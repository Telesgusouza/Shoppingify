import { combineReducers } from 'redux';

import useShoppingCart from './shoppingCart/reducer'; 
import useToggleLateralMenu from "./toggleLateralMenu/reducer";
import togglePaymentMethod from './togglePaymentMethod/reducer';
import useInfoProduct from './InfoProduct/reducer';
import userEditUserToggle from './EditUserToggle/reducer';


const rootReducer = combineReducers({useShoppingCart, useToggleLateralMenu, togglePaymentMethod, useInfoProduct, userEditUserToggle});

export default rootReducer;