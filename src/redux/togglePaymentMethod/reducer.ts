import actionsType from '../../actions';
import { IActionPayment, IPropsPayment } from '../../interfaces';

const initialState: IPropsPayment = {
    togglePayment: false,
}

const togglePaymentMethod = (state = initialState, action: IActionPayment) => {
    if(action.type === actionsType.togglwBoxPayment) {
        return {...state, togglePayment: action.payload}
    }

    return state;
}

export default togglePaymentMethod;