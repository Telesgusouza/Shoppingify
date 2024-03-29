import { IPropsActionShoppingCart } from "../../interfaces";

import actionsType from "../../actions";

interface IPropsListData {
  category: string;
  products: {
    product: string;
    quant: number;
  }[];
}

interface IPropsListCar {
  listCar: IPropsListData[] | [];
}

const initialState: IPropsListCar = {
  listCar: [],
};

const useShoppingCart = (
  state: IPropsListCar = initialState,
  action: IPropsActionShoppingCart
) => {
  if (action.type === actionsType.addItemCar) {
    return { ...state, listCar: action.payload };
  }

  return state;
};

export default useShoppingCart;
