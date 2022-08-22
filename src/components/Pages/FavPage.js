import {
  Typography,
  Box,
  Button,
  CardContent,
  Card,
  CardActions,
} from "@mui/material";
import { addToFav } from "../../redux/features/productsSlice";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useSelector, useDispatch } from "react-redux";
import {toast } from "react-toastify";
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

  return (
    <Box maxWidth="lg" sx={{ mt: "5rem" }} className="page_container">
      {myFav &&
        myFav.map((post) => (
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
                  posted by {post.email}
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
                  onClick={() => addMyFavBasket(post)}
                >
                  <HeartBrokenIcon />
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default FavPage;
