import { collection, DocumentData, getDocs } from "firebase/firestore";
import { IPropsDataProduct } from "../../interfaces";
import { db } from "../firebase";


export async function getDataProducts() {
  const docRefCategory = collection(db, "/listProducts/listCategory/list");

  await getDocs(docRefCategory).then(async (CateSnap) => {
    const listProducts: { category: string; listData: Array<any> }[] = [];
    const lengthCategory = CateSnap.docChanges().length;

    CateSnap.docChanges().forEach(async (element: any) => {
      const commodityCategory =
        element.doc._document.data.value.mapValue.fields.category.stringValue;

      const docRef = collection(db, `/listProducts/list/${commodityCategory}`);

      await getDocs(docRef).then((docSnap) => {
        let listData: IPropsDataProduct[] = [];

        docSnap.docChanges().forEach((element: DocumentData) => {
          const getFields = element.doc.data.value.mapValue.fields;
          const getKeyField = element.doc.key.path.segments[8];

          const data: IPropsDataProduct = {
            product: getFields.product.stringValue,
            quant: getFields.quant.integerValue,
            value: getFields.value.doubleValue,

            key: getKeyField,
          };

          listData.push(data);
        });

        const data: {
          category: string;
          listData: IPropsDataProduct[];
        } = {
          category: commodityCategory,
          listData,
        };

        listProducts.push(data);
      });

      if (listProducts.length === lengthCategory) {
        console.log(listProducts);
        return listProducts;
      }
    });
  });
}
