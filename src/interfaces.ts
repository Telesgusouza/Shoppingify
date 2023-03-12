

export interface IPropsOptionMenus {
  page: "inicialpage" | "history" | "estátics";
}

export interface IPropsDataProduct {
  product: string;
  quant: number;
  value: number;
  key: string;
}

export interface IPropsDataListProducts {
  category: string;
  listData: IPropsDataProduct[];
}

export interface IPropsItemMenu {
  key: string;
  product: string;
  quant: number;
  originalQuant: number;
}

export interface IPropsData {
  category: string;
  products: [
    {
      key: string;
      product: string;
      quant: number;
      originalQuant: number
    }
  ];
}
///    IPropsDataProduct[] | IPropsDataListProducts[] | 
export interface IPropsReducer {
  useShoppingCart: { listCar: IPropsData[] | [] };
}

export interface IPropsStateShoppingCart {
  listCar: IPropsDataListProducts[];
}

export interface IPropsActionShoppingCart {
  type: string;
  payload: IPropsDataListProducts[];
}

export interface IPropsListData {
  category: string;
  products: {
    product: string;
    quant: number;
  }[];
}

export interface IPropsListCar {
  listCar: IPropsListData[];
}

const initialState: IPropsListCar = {
  listCar: [],
};