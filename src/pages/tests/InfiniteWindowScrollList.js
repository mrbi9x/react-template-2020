import React, { forwardRef, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "pages/posts/postsSlice";
import { DynamicSizeList as List } from "react-window";
import { loremIpsum } from "lorem-ipsum";
import InfiniteLoader from "react-window-infinite-loader";
import Post from "pages/posts/Post";
import { WindowScroller } from "react-virtualized";

const Row = (props) => {
  const { style, forwardedRef } = props;
  return (
    <div ref={forwardedRef} style={style}>
      <Post {...props} />
    </div>
  );
};

const RefForwardedRow = forwardRef((props, ref) => (
  <Row {...props} forwardedRef={ref} />
));

export default function InfiniteWindowScrollList() {
  const { entities, status, currentPage, hasNextPage } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  const fetchPostsCallback = useCallback(() => {
    dispatch(fetchPosts(currentPage + 1));
  }, [dispatch, currentPage]);
  const listRef = useRef(undefined);

  const onScroll = useCallback(({ scrollTop }) => {
    listRef.current?.scrollTo(scrollTop);
  }, []);

  const loadMoreItems = status === "loading" ? () => {} : fetchPostsCallback;

  const isItemLoaded = (index) => !hasNextPage || index < entities.length;

  const itemCount = hasNextPage ? entities.length + 1 : entities.length;

  return (
    <>
      <WindowScroller onScroll={onScroll}>{() => <div />}</WindowScroller>
      <InfiniteLoader
        itemCount={itemCount}
        isItemLoaded={isItemLoaded}
        hasNextPage={hasNextPage}
        loadMoreItems={loadMoreItems}
        threshold={15}
      >
        {({ onItemsRendered }) => (
          <List
            height={window.innerHeight}
            itemCount={itemCount}
            ref={listRef}
            onItemsRendered={onItemsRendered}
            style={{ height: "100% !important" }}
          >
            {RefForwardedRow}
          </List>
        )}
      </InfiniteLoader>
    </>
  );
}
