import { IPropsActionShoppingCart, IPropsArrayData } from "../../interfaces";

import actionsType from "../../actions";

interface IPropsProduct {
  infoProduct: IPropsArrayData | {};
}

interface IPropsActionProduct {
    type: string;
    payload: IPropsProduct
}

const initialState: IPropsProduct = {
  infoProduct: {},
};

const useInfoProduct = (
  state: IPropsProduct = initialState,
  action: IPropsActionProduct
) => {
  if (action.type === actionsType.infoProduct) {
    return { ...state, infoProduct: action.payload };
  }

  return state;
};

export default useInfoProduct;
