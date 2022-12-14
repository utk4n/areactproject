import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Box,
  DialogActions,
  Button,
  DialogContentText,
  Container,
  CardContent,
  Card,
  CardActions,
} from "@mui/material";
import {
  deleteFBDoc,
  addFBDoc,
  addToFav,
} from "../../redux/features/productsSlice";
import useNotify from "../../hooks/useNotify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFirebaseListener } from "../../firebase/firebaseConfigs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ReactJs = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    notifySuccess,
    notifyRemove,
    notifyError,
    notifyLike,
    notifyAlready,
  } = useNotify();
  const removeDoc = (id) => {
    dispatch(deleteFBDoc(id));
    notifyRemove();
  };

  const products = useFirebaseListener();
  const ReactJsFilter = products?.filter((el) => el?.category == "ReactJs");
  const favPost = useSelector((state) => state.products.myFav);

  const addMyFavBasket = (post) => {
    const checkMyFav = favPost.find((fav) => fav.id === post.id);
    if (checkMyFav) {
      notifyAlready();
    } else {
      dispatch(addToFav(post));
      notifyLike();
    }
  };

  console.log(ReactJsFilter);
  return (
    <>
     <Box maxWidth="lg" sx={{ mt: "5rem" }} className="page_container">
    <Typography className="title_section" display={'flex'} alignItems='center' justifyContent={'center'} borderRadius={1.3} bgcolor={"blue"} textAlign={'center'} color='white' variant="h3">ReactJs Page</Typography>
      {ReactJsFilter &&
        ReactJsFilter.map((post) => (
          <Card className="grid_cards">
            <CardContent className="card_content">
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: "700" }}
                  color="text.secondary"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  color="text.secondary"
                >
                  {post.email}
                </Typography>
              </Box>
              <Typography variant="body2">{post.description}</Typography>

              <Box className="category_row">
                <span className={post.category}>{post.category}</span>
              </Box>
            </CardContent>
            <CardActions>
              <Box
                sx={{ width: "100%" }}
                display="flex"
                justifyContent={"space-between"}
              >
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#ff3d00" }}
                  onClick={() => setDialogIsOpen((prev) => !prev)}
                >
                  <DeleteForeverIcon />
                </Button>

                <Button
                  variant="contained"
                  sx={{ bgcolor: "#ff3d00" }}
                  onClick={() => addMyFavBasket(post)}
                >
                  <FavoriteIcon />
                </Button>
              </Box>
              <Dialog
                open={dialogIsOpen}
                onClose={() => setDialogIsOpen((prev) => !prev)}
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Are you sure?
                </DialogTitle>
                <DialogContent dividers>
                  <Box display="flex" alignItems={"center"}>
                    <Box>
                      <DialogActions>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            removeDoc(post.id)
                            setDialogIsOpen(prev => !prev)
                          }}
                        >
                          Remove
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setDialogIsOpen((prev) => !prev)}
                        >
                          Cancel
                        </Button>
                      </DialogActions>
                    </Box>
                  </Box>
                </DialogContent>
              </Dialog>
            </CardActions>
          </Card>
        ))}
    </Box>
    <Box display={'flex'}
    alignItems='center'
    justifyContent={'center'}
    mb={5}
   >
        <Button variant='contained' color="success" sx={{width: "10rem", padding:"0.5rem"}} onClick={() => navigate("/")}>
Go back
        </Button>

        </Box>
    </>
  );
};

export default ReactJs;
