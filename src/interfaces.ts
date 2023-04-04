export interface IPropsOptionMenus {
  page: "inicialpage" | "history" | "statistics" | "";
}

export interface IPropsDataProduct {
  product: string;
  quant: number;
  value: number;
  key: string;
}

export interface getListDoc {
  description: string;
  quant: number;
  product: string;
  value: number;
  key?: string;
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
      originalQuant: number;
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

export interface IPropsLateralMenu {
  toggleMenu: "SEE_LIST_MENU" | "SEE_PRODUCT_MENU";
  getKey?: string;
}

export interface IPropsPayment {
  togglePayment: boolean;
}

export interface IActionLateralMenu {
  type: string;
  payload: "SEE_LIST_MENU" | "SEE_PRODUCT_MENU";
  payloadGetKey?: string;
}

export interface IPropsRootReducer {
  useShoppingCart: IPropsReducer;
  useToggleLateralMenu: IPropsLateralMenu;
  togglePaymentMethod: IPropsPayment;
  useInfoProduct: IPropsArrayData
}

export interface IActionPayment {
  type: string;
  payload: boolean;
}

export interface IPropsProduct {
  key: string;
  originalQuant: number;
  product: string;
  quant: number;
}

export interface IPropsDataList {
  category: string;
  products: IPropsProduct[];
}

export interface IPropsArrayData {
  key: string
  date: string;
  dataList: IPropsDataList[];
}

export interface IPropsGetArrayData {
  key: string
  date: string;
  listData: IPropsDataList[];
}