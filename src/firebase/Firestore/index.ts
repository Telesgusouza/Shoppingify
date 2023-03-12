import { onAuthStateChanged, User } from "firebase/auth";
import { collection, DocumentData, getDocs, setDoc } from "firebase/firestore";
import { IPropsDataProduct } from "../../interfaces";
import { auth, db } from "../firebase";

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

export async function addItem(key: string) {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user !== null) {
      const uid = user.uid;
      // setDoc(doc(db, `ShoppingCart/${user.uid}`), {avocado: "hummmm"});
    }
  });
}
