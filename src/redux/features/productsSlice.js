import { createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, addDoc } from "firebase/firestore";

import { db, auth } from "../../firebase/firebaseConfigs";

const initialState = {
  postTemplate: {
    name: "",
    title: "",
    desc: "",
    category: null,
  },
  myFav: localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [],
};

const productsRef = collection(db, "products");

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteFBDoc: (state,action) => {
      deleteDoc(doc(db, "products", action.payload));
    },
    addFBDoc: (state, action) => {
      const uid = auth.currentUser?.uid;
      const email = auth.currentUser?.email
      if (!uid) return;
      addDoc(productsRef, {
        title: action.payload?.title,
        description: action.payload.description,
        category: action.payload.category,
        email,
        uid,
      });
    },
    addToFav: (state, { payload }) => {
      const isInclude = state.myFav.find((fav) => fav.id === payload.id);
      if (isInclude) {
        state.myFav = state.myFav.filter((fav) => fav.id !== payload.id);
        localStorage.setItem("posts", JSON.stringify(state.myFav))
      } else {
        state.myFav.push(payload);
        localStorage.setItem("posts", JSON.stringify(state.myFav))
      }
    },
  },
});

export default productsSlice.reducer;
export const { deleteFBDoc, addFBDoc, addToFav } = productsSlice.actions;
