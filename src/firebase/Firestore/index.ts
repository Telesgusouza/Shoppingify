import { onAuthStateChanged, User } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getListDoc,
  IPropsArrayData,
  IPropsDataList,
  IPropsDataProduct,
  IPropsProduct,
} from "../../interfaces";
import { auth, db } from "../firebase";

import store from "../../redux/stoge";
import actionType from "../../actions";
import { Params } from "react-router-dom";

interface IPropsData {
  product: string;
  initialValue: number;
  porcent: number;
}

export async function getDataProducts() {
  const docRefCategory = collection(db, "/listProducts/listCategory/list");
  const CateSnap = await getDocs(docRefCategory);

  const listProducts: { category: string; listData: IPropsDataProduct[] }[] =
    [];


  for (const element of CateSnap.docChanges()) {
    const commodityCategory = element.doc.data().category;
    const docRef = collection(db, `/listProducts/list/${commodityCategory}`);
    const docSnap = await getDocs(docRef);
    let listData: IPropsDataProduct[] = [];


    docSnap.docChanges().forEach((element: DocumentData) => {
      const getFields = element.doc.data();
      const getKeyField = element.doc._key?.path?.segments[8];

      if (getFields && getKeyField) {
        const data: IPropsDataProduct = {
          product: getFields.product,
          quant: getFields.quant,
          value: getFields.value,
          key: getKeyField,
        };

        listData.push(data);
      }
    });

    const data: {
      category: string;
      listData: IPropsDataProduct[];
    } = {
      category: commodityCategory,
      listData,
    };

    listProducts.push(data);
  }
  return listProducts;
}

export async function getItem(key: string) {
  const getData = await getDoc(doc(db, `/listProducts/list/${key}`));
  return getData.data();
}

export async function setListData() {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user !== null) {
      const { listCar } = store.getState().useShoppingCart;
      const userUid = user.uid;

      const data = {
        listData: listCar,
      };

      const docRef = doc(db, `/listProducts/listCar/list/${userUid}`);

      setDoc(docRef, data).catch((err) =>
        console.error(
          "Esta ocorrendo um erro na hora de setar os dados [ERROR] ",
          err
        )
      );
    }
  });
}

export async function getListData() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  const arrayProducts: getListDoc[] = [];

  if (user !== null) {
    const data: DocumentData = await getDoc(
      doc(db, `/listProducts/listCar/list/${user.uid}`)
    );

    const promises = data.data().listData.map((element: DocumentData) => {
      return Promise.all(
        element.products.map((item: DocumentData) =>
          getDoc(
            doc(db, `/listProducts/list/${element.category}/${item.key}`)
          ).then((resp: DocumentData) => {
            const dataProd: getListDoc = resp.data();

            const setData = {
              product: dataProd.product,
              quant: item.quant,
              value: dataProd.value,
              description: dataProd.description,
              key: item.key,
            };

            return setData;
          })
        )
      ).then((products) => {
        arrayProducts.push(...products);
      });
    });

    await Promise.all(promises);
  }

  return arrayProducts;
}

export async function handleTotalValue(): Promise<number> {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        resolve(user);
      }
    });
  });

  if (user !== null) {
    const data = await getDoc(
      doc(db, `/listProducts/listCar/list/${user.uid}`)
    );

    let valueData: number = 0;

    if (data.exists()) {
      const listData = data.data().listData;

      for (const resp of listData) {
        const promises = resp.products.map((quantItem: DocumentData) => {
          return getDoc(
            doc(db, `/listProducts/list/${resp.category}/${quantItem.key}`)
          ).then((getData: DocumentData) => {
            return {
              quant: quantItem.quant,
              value: getData.data().value,
            };
          });
        });

        const itemsData = await Promise.all(promises);

        itemsData.forEach((data: DocumentData) => {
          valueData += data.quant * data.value;
        });
      }

      return valueData;
    }
  }

  return 0;
}

export async function clearCart() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        resolve(user);
      }
    });
  });

  if (user !== null) {
    try {
      await setHistory(user.uid);

      await setDoc(doc(db, `/listProducts/listCar/list/${user.uid}`), {
        listData: [],
      });
      return false;
    } catch (err) {
      console.error("[ERROR] >>> ", err);
    }
  }

  return true;
}

async function setHistory(uid: string) {
  const getData: DocumentData = await getDoc(
    doc(db, `/listProducts/listCar/list/${uid}`)
  );
  const date = new Date();
  const getDay = date.getDate() < 10 ? `0${date.getDate}` : date.getDate();
  const getMounth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const getYear = date.getFullYear();

  const data = {
    listData: getData.data().listData,
    date: date.toLocaleString("pt-br"),
  };

  addDoc(collection(db, `/listProducts/listHistory/${uid}`), data);
}

export async function getListCar() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user !== null) {
        resolve(user);
      }
    });
  });

  if (user !== null) {
    const listData = await getDoc(
      doc(db, `/listProducts/listCar/list/${user.uid}`)
    );
    const data = listData.data();
    if (data !== undefined) {
      store.dispatch({ type: actionType.addItemCar, payload: data.listData });
    }
  }
}

export async function getListHistory() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  if (user !== null) {
    const listData = await getDocs(
      collection(db, `/listProducts/listHistory/${user.uid}`)
    );

    const arrayData: IPropsArrayData[] = [];

    listData.docChanges().forEach((element: DocumentData) => {
      const field = element.doc._document.data.value.mapValue.fields;

      if (field.listData.arrayValue.values !== undefined) {
        const dataList: IPropsDataList[] = [];
        field.listData.arrayValue.values.forEach((arrayField: DocumentData) => {
          const arrayProducts: IPropsProduct[] = [];

          arrayField.mapValue.fields.products.arrayValue.values.forEach(
            (itemProduct: DocumentData) => {
              arrayProducts.push({
                key: itemProduct.mapValue.fields.key.stringValue,
                originalQuant:
                  itemProduct.mapValue.fields.originalQuant.integerValue,
                product: itemProduct.mapValue.fields.product.stringValue,
                quant: itemProduct.mapValue.fields.quant.integerValue,
              });
            }
          );

          dataList.push({
            category: arrayField.mapValue.fields.category.stringValue,
            products: arrayProducts,
          });
        });

        const data = {
          key: element.doc._key.path.segments[8],
          date: field.date.stringValue,
          dataList: dataList,
        };

        arrayData.push(data);
      }
    });

    return arrayData;
  }
}

export async function getProductList(
  key: Readonly<Params<string>> | undefined | string
) {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  if (user !== null) {
    const getData: DocumentData = await getDoc(
      doc(db, `/listProducts/listHistory/${user.uid}/${key}`)
    );
    const data = {
      key: getData._key.path.segments[3],
      date: getData.data().date,
      listData: getData.data().listData,
    };

    return data;
  }
}

export async function getInfoGraficData() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  if (user !== null) {
    const getData = await getDocs(
      collection(db, `/listProducts/listHistory/${user.uid}`)
    );

    const promises = getData.docChanges().map(async (element: DocumentData) => {
      const fieldsHistory = element.doc.data();

      let fullValueCar: number = 0;
      let promises: Promise<any>[] = [];

      fieldsHistory.listData.forEach((itemForCategory: DocumentData) => {
        itemForCategory.products.forEach((itemProduct: DocumentData) => {
          const promise = getDoc(
            doc(
              db,
              `/listProducts/list/${itemForCategory.category}/${itemProduct.key}`
            )
          ).then((getValueData: DocumentData) => {
            fullValueCar += itemProduct.quant * getValueData.data().value;
          });
          promises.push(promise);
        });
      });

      await Promise.all(promises);

      const data = {
        date: fieldsHistory.date,
        totalValue: fullValueCar.toFixed(2),
      };

      return data;
    });

    return Promise.all(promises);
  }
}

export async function getTopProducts() {
  const user = await new Promise<User | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  if (user !== null) {
    const getData = await getDocs(
      collection(db, `/listProducts/listHistory/${user.uid}`)
    );

    const arrayItens: any[] = [];

    getData.docChanges().forEach((productsData) => {
      const product = productsData.doc.data();

      const productsCount: any = {};
      product.listData.forEach((data: DocumentData) => {
        data.products.forEach((product: DocumentData) => {
          if (product.product in productsCount) {
            productsCount[product.product] += 1;
          } else {
            productsCount[product.product] = 1;
          }
        });
      });

      arrayItens.push(productsCount);
    });

    const counts: {
      [key: string]: number;
    } = {};
    arrayItens.forEach((object) => {
      Object.entries(object).forEach(([key, value]: any) => {
        if (key in counts) {
          counts[key] += value;
        } else {
          counts[key] = value;
        }
      });
    });

    const topProdutos = Object.fromEntries(
      Object.entries(counts)
        .sort((a: any, b: any) => b[1] - a[1])
        .slice(0, 3)
    );

    const totalCount = { totalCount: 0 };

    Object.keys(counts).forEach((key) => {
      totalCount.totalCount += counts[key];
    });

    const data: IPropsData[] = [];

    Object.entries(topProdutos).forEach(([key, value]: any) => {
      const porcent = ((value * 100) / totalCount.totalCount).toFixed(0);
      data.push({
        product: key,
        initialValue: Number(value),
        porcent: Number(porcent),
      });
    });

    return data;
  }
}

export async function geTopCategory() {
  const user = await new Promise<User | null>((result) => {
    onAuthStateChanged(auth, (user) => {
      result(user);
    });
  });

  if (user !== null) {
    const getDataDocChanges = await getDocs(
      collection(db, `/listProducts/listHistory/${user.uid}`)
    );
    const count: {
      [key: string]: number;
    } = {};

    getDataDocChanges.docChanges().forEach((element) => {
      const products = element.doc.data();
      products.listData.forEach((item: DocumentData) => {
        if (count[item.category] === undefined) {
          count[item.category] = 1;
        } else {
          count[item.category] += 1;
        }
      });
    });

    const totalCount = { totalCount: 0 };

    Object.keys(count).forEach((key) => {
      totalCount.totalCount += count[key];
    });

    const topProdutos = Object.fromEntries(
      Object.entries(count)
        .sort((a: any, b: any) => b[1] - a[1])
        .slice(0, 3)
    );

    const data: IPropsData[] = [];

    Object.entries(topProdutos).forEach(([key, value]: any) => {
      const porcent = ((value * 100) / totalCount.totalCount).toFixed(0);
      data.push({
        product: key,
        initialValue: Number(value),
        porcent: Number(porcent),
      });
    });

    return data;
  }
}
