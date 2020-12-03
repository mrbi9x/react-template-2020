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
} from "@material-ui/core";

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
          <CardMedia
            title={post.title}
            component="img"
            src={post.url}
            height="450"
            // children={<img alt={post.title} src={post.url} />}
          />
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
