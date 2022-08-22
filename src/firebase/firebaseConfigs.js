import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyASOSA9orr8NxNZiKUppp6UtZ62EUSGrhU",
  authDomain: "areactproject.firebaseapp.com",
  projectId: "areactproject",
  storageBucket: "areactproject.appspot.com",
  messagingSenderId: "498489811627",
  appId: "1:498489811627:web:4dd7d4263d336cd046cdee",
  measurementId: "G-LN41F4EVQQ",
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const productsRef = collection(db, "products");

export const useFirebaseListener = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return   {...data, id : doc.id, createdAt : data.createdAt?.toDate()};
        })
      );
    });
  }, []);
  return products;
};

// export const deleteFirebaseDoc = (id) => {
//   deleteDoc(doc(db, "products", id));
// };

// export const addFirebaseDoc = () => {
//  const uid = auth.currentUser?.uid
//  if(!uid) return;
// addDoc(productsRef, {
//   name : "Utkan",
//   age : 29,
//   uid
// })
// }