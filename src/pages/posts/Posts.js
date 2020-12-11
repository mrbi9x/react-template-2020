import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import {
  Container,
  // makeStyles,
} from "@material-ui/core";
import InfiniteList from "components/infinite-list/InfiniteList";
import Post from "./Post";
import PostLoading from "./PostLoading";

// const useStyles = makeStyles((theme) => ({
//   root: {

//   }
// }));

export default function Posts() {
  const { entities, status, currentPage, hasNextPage } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  const fetchPostsCallback = useCallback(() => {
    dispatch(fetchPosts(currentPage + 1));
  }, [dispatch, currentPage]);

  return (
    <>
      <Container maxWidth="sm" disableGutters fixed>
        <InfiniteList
          totalItems={entities.length}
          itemRender={Post}
          itemLoadingRender={PostLoading}
          hasNextPage={hasNextPage}
          nextPageLoading={status === "loading"}
          loadNextPage={fetchPostsCallback}
        />
      </Container>
    </>
  );
}
