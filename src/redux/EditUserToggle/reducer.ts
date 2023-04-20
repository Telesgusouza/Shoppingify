import { IPropsActionToggleEditUser, IPropsToggleEditUser } from "../../interfaces";
import actionsType from '../../actions';


const initialState: IPropsToggleEditUser = {
    toggle: true
}

const userEditUserToggle = (
    state = initialState,
    action: IPropsActionToggleEditUser
  ) => {
    if (action.type === actionsType.toggleEditUser) {
      return { ...state, toggle: action.payload };
    }
  
    return state;
  };
  
  export default userEditUserToggle;