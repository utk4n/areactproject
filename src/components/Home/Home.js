import SelectOption from "./Select";
import Posts from "../Posts/Posts";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseListener } from "../../firebase/firebaseConfigs";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Button, TextField } from "@mui/material";
import {
  deleteFBDoc,
  addFBDoc,
  addToFav,
} from "../../redux/features/productsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNotify from "../../hooks/useNotify";

const Home = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDesc, setNewPostDesc] = useState("");
  const [categoryName, setCategoryName] = useState([]);

  const products = useFirebaseListener();
  const dispatch = useDispatch();

  const {
    notifySuccess,
    notifyRemove,
    notifyError,
    notifyLike,
    notifyAlready,
  } = useNotify();

  const favPost = useSelector((state) => state.products.myFav);

  const removeDoc = (id) => {
    dispatch(deleteFBDoc(id));
    notifyRemove();
  };

  const addMyFavBasket = (post) => {
    const checkMyFav = favPost.find((fav) => fav.id === post.id);
    if (checkMyFav) {
      notifyAlready();
    } else {
      dispatch(addToFav(post));
      notifyLike();
    }
  };

  const addNewPost = () => {
    if (newPostTitle !== "" && newPostDesc !== "" && categoryName.length >= 1) {
      notifySuccess();

      dispatch(
        addFBDoc({
          title: newPostTitle,
          description: newPostDesc,
          category: categoryName,
        })
      );
      setCategoryName([]);
      setNewPostTitle("");
      setNewPostDesc("");
    } else {
      notifyError();
    }
  };

  // useEffect(() => {
  //   if (newPostDesc.length === 140) {
  //   }
  //   console.log(newPostDesc);
  // }, [newPostDesc]);
  return (
    <Container maxWidth="lg">
      <ToastContainer />
      <Box component="form" sx={{ mt: 8 }}>
        <Box display={"flex"} alignContent="center" justifyContent={"center"}>
          <TextField
            // sx={{ minWidth: "300px" }}
            label="Add new post title..."
            margin="normal"
            required
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />

          <SelectOption
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
        </Box>
        <TextField
          label={`Add new post content... Max ${
            140 - newPostDesc.length
          } Characters.`}
          fullWidth
          required
          multiline
          rows={4}
          value={newPostDesc}
          error={newPostDesc.length >= 140}
          onChange={(e) => setNewPostDesc(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={addNewPost}
          disabled={newPostDesc.length >= 140}
        >
          {newPostDesc.length >= 140
            ? "Max Limit 140 Characters!"
            : "Add new post"}
        </Button>
      </Box>
      <Box
        sx={{ mt: "0.5rem" }}
        padding={2}
        display="flex"
        alignItems={"flex-end"}
        justifyContent={"center"}
        columnGap={3}
      >
        <Link to="/html">
          <Button variant="contained" sx={{ backgroundColor: "#ba000d" }}>
            HTML
          </Button>
        </Link>
        <Link to="/css">
          <Button variant="contained" sx={{ backgroundColor: "#2862e8" }}>
            CSS
          </Button>
        </Link>
        <Link to="/javascript">
          <Button variant="contained" sx={{ backgroundColor: "#efd81d" }}>
            Javascript
          </Button>
        </Link>
        <Link to="/reactjs">
          <Button variant="contained" sx={{ backgroundColor: "blue" }}>
            ReactJs
          </Button>
        </Link>
      </Box>
      <div className="grid">
        {products?.map((post) => (
          <Posts
            key={post.id}
            addMyFavBasket={addMyFavBasket}
            removeDoc={removeDoc}
            {...post}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
