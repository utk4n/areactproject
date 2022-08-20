import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  useFirebaseListener,
  deleteFirebaseDoc,
  addFirebaseDoc,
} from "../../firebase/firebaseConfigs";
import { useDispatch } from "react-redux";
import { deleteFBDoc, addFBDoc } from "../../redux/features/productsSlice";
import SelectOption from "./Select";
import { Button, TextField } from "@mui/material";
import Posts from "../Posts/Posts";
const Home = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDesc, setNewPostDesc] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const products = useFirebaseListener();
  const dispatch = useDispatch();

  const removeDoc = (id) => {
    dispatch(deleteFBDoc(id));
  };

  const addNewPost = () => {
  
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


  };

  useEffect(() => {
    if (newPostDesc.length === 140) {
    }
    console.log(newPostDesc);
  }, [newPostDesc]);
  return (
    <Container maxWidth="xl">
      <Box component="form" sx={{ mt: 8 }}>
        <Box display={"flex"} alignContent="center" justifyContent={"center"}>
          <TextField
            sx={{ minWidth: "300px" }}
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
       <Box display={"flex"} alignContent="center" justifyContent={"center"} flexDirection="column">
       <TextField
          label={`Add new post content... Max ${
            140 - newPostDesc.length
          } Characters.`}
          fullWidth
          multiline
          rows={4}
          value={newPostDesc}
          error={newPostDesc.length >= 140}
         
          onChange={(e) => setNewPostDesc(e.target.value)}
        />
         <Button
          variant="contained"
          sx={{ mt: 2}}
          onClick={addNewPost}
          disabled={newPostDesc.length >= 140}
        >
          {newPostDesc.length >= 140 ? "Max Limit 140 Characters!" :  "Add new post"}
        </Button>
       </Box>
       
      </Box>

      <Box sx={{ mt: 8 }}>
        {products?.map((post) => (
          <Posts key={post.id} removeDoc={removeDoc} {...post} />
          // <h2 >
          //   {pro?.name}{pro?.category}
          //   <button onClick={() => (pro.id)}>del</button>
          // </h2>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
