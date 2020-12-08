import React, { useEffect, useState } from "react";
import { DynamicSizeList as List } from "react-window";
import Container from "@material-ui/core/Container";
import { loremIpsum } from "lorem-ipsum";
import Post from "pages/posts/Post";
import { ReactWindowScroller } from "react-window-scroller/dist/index.jsx";
import InfiniteLoader from "react-window-infinite-loader";
import { useCallback } from "react";
import Typography from "@material-ui/core/Typography";

//pollyfill for ResizeObserver
if (typeof ResizeObserver === "undefined") {
  global.ResizeObserver = require("resize-observer-polyfill").default;
}

// This example uses an array of random strings,
// But the list can also contain data that's async loaded, like images.
const initialItems = new Array(50).fill(true).map(() =>
  loremIpsum({
    units: "paragraphs",
    paragraphLowerBound: 1,
    paragraphUpperBound: 10,
  })
);

const Row = ({ data, index, style, forwardedRef }) => (
  <div ref={forwardedRef} style={style}>
    <Post index={index} content={data[index]} />
  </div>
);

const RefForwardedRow = React.forwardRef((props, ref) => (
  <Row {...props} forwardedRef={ref} />
));

export default function Test1() {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  // const loadNextPageCb = useCallback(
  //   (...args) => {
  //     console.log("Load next page", ...args);
  //     setNextPageLoading(true);
  //     setTimeout(() => {
  //       setHasNextPage(items.length < 9999);
  //       const newItems = new Array(50).fill(true).map(() =>
  //         loremIpsum({
  //           units: "paragraphs",
  //           paragraphLowerBound: 1,
  //           paragraphUpperBound: 10,
  //         })
  //       );
  //       const nextItems = [...items, ...newItems];
  //       console.log(nextItems.length);
  //       setItems(nextItems);
  //       setNextPageLoading(false);
  //     }, 3000);
  //   },
  //   [nextPageLoading, items]
  // );

  const loadNextPage = (...args) => {
    console.log("Load next page", ...args);
    setNextPageLoading(true);
    setTimeout(() => {
      // setHasNextPage(items.length < 9999);
      const newItems = new Array(50).fill(true).map(() =>
        loremIpsum({
          units: "paragraphs",
          paragraphLowerBound: 1,
          paragraphUpperBound: 10,
        })
      );
      const nextItems = [...items, ...newItems];
      console.log(nextItems.length);
      setItems(nextItems);
      setNextPageLoading(false);
    }, 3000);
  };
  const loadMoreItems = nextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // useEffect(() => {
  //   setItems(initialItems);
  // }, []);

  return (
    <>
      <Typography variant="h2" color="initial" align="center">
        {items.length}
      </Typography>

      <Container maxWidth="sm">
        <InfiniteLoader
          itemCount={itemCount}
          isItemLoaded={isItemLoaded}
          hasNextPage={hasNextPage}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <ReactWindowScroller outerRef={ref}>
              {({ ref, outerRef, style, onScroll }) => (
                <List
                  height={window.innerHeight}
                  itemCount={itemCount}
                  itemData={items}
                  ref={ref}
                  outerRef={outerRef}
                  style={style}
                  onScroll={onScroll}
                  onItemsRendered={onItemsRendered}
                  overscanCount={2}
                >
                  {RefForwardedRow}
                </List>
              )}
            </ReactWindowScroller>
          )}
        </InfiniteLoader>
      </Container>
    </>
  );
}
