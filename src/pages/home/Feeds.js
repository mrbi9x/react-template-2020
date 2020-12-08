import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { ReactWindowScroller } from "react-window-scroller";
import Post from "../posts/Post";

const caculateItemSize = (index) => (index % 2 ? 50 : 100);
const GUTTER_SIZE = 20;

export default function Feeds() {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const loadNextPage = (...args) => {
    console.log("Load next page", ...args);
    setNextPageLoading(true);
    setTimeout(() => {
      setHasNextPage(items.length < 9999);
      const newItems = [...items].concat(new Array(50).fill(null));
      setItems(newItems);
      setNextPageLoading(false);
    }, 3000);
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = nextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const Row = ({ index, style }) => {
    const isOdd = index % 2;
    const itemStyle = {
      backgroundColor: isOdd ? "#f9f9f9" : "white",
      top: style.top + GUTTER_SIZE,
      height: style.height - GUTTER_SIZE,
    };
    if (!isItemLoaded(index)) {
      return <div style={{ ...style, ...itemStyle }}>Loading...</div>;
    }
    return (
      //   <div style={{ ...style, ...itemStyle }}>
      <Paper style={{ ...style, ...itemStyle }}>{`Row ${index}`}</Paper>
      //   </div>
    );
    return <Post />;
  };

  return (
    <>
      <p>Feeds</p>
      <Post />
      <InfiniteLoader
        itemCount={itemCount}
        isItemLoaded={isItemLoaded}
        hasNextPage={hasNextPage}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <ReactWindowScroller>
            {({ ref, outerRef, style, onScroll }) => (
              <VariableSizeList
                itemCount={itemCount}
                height={window.innerHeight}
                itemSize={caculateItemSize}
                onItemsRendered={onItemsRendered}
                outerRef={outerRef}
                style={style}
                onScroll={onScroll}
                ref={ref}
                overscanCount={2}
              >
                {Row}
              </VariableSizeList>
            )}
          </ReactWindowScroller>
        )}
      </InfiniteLoader>
    </>
  );
}
