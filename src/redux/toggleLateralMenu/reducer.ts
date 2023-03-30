import { IActionLateralMenu, IPropsActionShoppingCart, IPropsLateralMenu } from "../../interfaces";
import actionsType from '../../actions';



const initialState: IPropsLateralMenu = {
    toggleMenu: "SEE_LIST_MENU",
    getKey: ""
}

const useToggleLateralMenu = (state: IPropsLateralMenu = initialState, action: IActionLateralMenu) => {
    if(action.type === actionsType.toggleLateralMenu) {
        return {...state, toggleMenu: action.payload, getKey: action.payloadGetKey}
    }
    
    return state;
}

export default useToggleLateralMenu;