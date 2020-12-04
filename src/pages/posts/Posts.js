import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  // makeStyles,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {

//   }
// }));

export default function Posts() {
  const { entities, status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const postsList = (post) => {
    return (
      <Box my={5} key={post.id}>
        <Card>
          <CardMedia>
            <Box>
              <img alt={post.title} src={post.url} />
            </Box>
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="initial">
              {post.title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <>
      <Typography variant="h5" color="initial" align="center">
        Posts:
      </Typography>
      <span>{entities.length}</span>
      <Container maxWidth="sm" disableGutters fixed>
        {entities.map((post) => postsList(post))}
      </Container>
    </>
  );
}
