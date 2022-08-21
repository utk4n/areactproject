import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import "./post.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Posts = ({ removeDoc, ...post }) => {
  return (
    <Box maxWidth="md">
      <Card className="grid_cards">
        <CardContent className="card_content">
          <Typography gutterBottom variant="h6" color="text.secondary">
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
          <Button
            variant="contained"
            sx={{ bgcolor: "#ff3d00"}}
            onClick={() => removeDoc(post.id)}
          >
            <DeleteForeverIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Posts;

// var result =
//   el === "HTML" ? "html"  : el === "CSS"   ? "css"  : el === "Javascript"  ? "javascript" : "Air Quality is EXCELLENT";
