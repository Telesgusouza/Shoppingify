import { combineReducers } from 'redux';

import useShoppingCart from './shoppingCart/reducer'; 

const rootReducer = combineReducers({useShoppingCart});

export default rootReducer;