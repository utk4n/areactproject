import { createSlice } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

import { db, auth } from "../../firebase/firebaseConfigs";

const initialState = {
  postTemplate: {
    name: "",
    title: "",
    desc: "",
    category: null,
  },
  havePost: [],
};

const productsRef = collection(db, "products");

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteFBDoc: (state, action) => {
      deleteDoc(doc(db, "products", action.payload));
    },
    addFBDoc: (state, action) => {
      const uid = auth.currentUser?.uid;
      if (!uid) return;

      addDoc(productsRef, {
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        uid,
      });
    },
  },
});

export default productsSlice.reducer;
export const { deleteFBDoc, addFBDoc } = productsSlice.actions;
