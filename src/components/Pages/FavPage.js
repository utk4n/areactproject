import {
  Typography,
  Box,
  Button,
  Container,
  CardContent,
  Card,
  CardActions,
} from "@mui/material";
import { addToFav } from "../../redux/features/productsSlice";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FavPage = () => {
  const myFav = useSelector((state) => state.products.myFav);
  const dispatch = useDispatch();

  const notifyError = () =>
    toast.error("Unfavourited 🚨!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const addMyFavBasket = (post) => {
    dispatch(addToFav(post));
    notifyError();
  };

  console.log(myFav);
  return (
    <Container maxWidth="md" className="fav_container">
      <ToastContainer />

      {myFav &&
        myFav.map((post) => (
          <Card>
            <Box>
              <CardContent className="fav_content">
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: "700" }}
                  color="text.secondary"
                >
                  {post.title}
                </Typography>
                <Typography variant="body2">{post.description}</Typography>
                <Box className="category_row">
                  {post.category.map((el) => (
                    <span
                      className={
                        el === "HTML"
                          ? "html"
                          : el === "CSS"
                          ? "css"
                          : el === "Javascript"
                          ? "javascript"
                          : el === "ReactJs"
                          ? "react"
                          : ""
                      }
                    >
                      {el}
                    </span>
                  ))}
                </Box>
                <CardActions>
                  <Box
                    sx={{ width: "100%" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#ff3d00" }}
                      onClick={() => addMyFavBasket(post)}
                    >
                      <HeartBrokenIcon />
                    </Button>
                  </Box>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        ))}
    </Container>
  );
};

export default FavPage;
