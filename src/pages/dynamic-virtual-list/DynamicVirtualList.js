import React, { useCallback, useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import InfiniteList from "components/infinite-list/InfiniteList";
import Post from "pages/posts/Post";
import Container from "@material-ui/core/Container";
import PostLoading from "pages/posts/PostLoading";

export default function DynamicVirtualList() {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const loadNextPageCb = useCallback(
    (...args) => {
      setNextPageLoading(true);
      setTimeout(() => {
        const newItems = new Array(30).fill(true).map(() =>
          loremIpsum({
            units: "paragraphs",
            paragraphLowerBound: 1,
            paragraphUpperBound: 10,
          })
        );
        const nextItems = [...items, ...newItems];
        setItems(nextItems);
        setHasNextPage(nextItems.length < 100);
        setNextPageLoading(false);
      }, 5000);
    },
    [items]
  );
  return (
    <Container maxWidth="sm" disableGutters fixed>
      <InfiniteList
        totalItems={items.length}
        itemRender={Post}
        itemLoadingRender={PostLoading}
        hasNextPage={hasNextPage}
        nextPageLoading={nextPageLoading}
        loadNextPage={loadNextPageCb}
      />
    </Container>
  );
}
