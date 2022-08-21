import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import "./post.css";
import { useState } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Posts = ({ favBtn, setFavBtn, addMyFavBasket, removeDoc, ...post }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Box maxWidth="md">
      <Card className="grid_cards">
        <CardContent className="card_content">
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
                      onClick={() => removeDoc(post.id)}
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
    </Box>
  );
};

export default Posts;
