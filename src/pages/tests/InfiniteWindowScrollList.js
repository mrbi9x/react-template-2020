import React, { forwardRef, useState } from "react";
import { DynamicSizeList as List } from "react-window";
import { loremIpsum } from "lorem-ipsum";
import { ReactWindowScroller } from "react-window-scroller";
import { WindowScroller } from 'react-virtualized'
import InfiniteLoader from "react-window-infinite-loader";
import { useCallback } from "react";
import Post from "pages/posts/Post";

const Row = ({ data, index, style, forwardedRef }) => {
  const isLoadedRow = index < data.length;
  if (!isLoadedRow) {
    return (<div ref={forwardedRef} style={style}>
      Loading...
    </div>)
  }
  return (
    <div ref={forwardedRef} style={style}>
      <Post index={index} content={data[index]} />
    </div>
  )
};

const RefForwardedRow = forwardRef((props, ref) => (
  <Row {...props} forwardedRef={ref} />
));

export default function Test1() {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const loadNextPageCb = useCallback(
    (...args) => {
      console.log("Load next page", ...args);
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
        console.log(nextItems.length);
        setItems(nextItems);
        setHasNextPage(nextItems.length < 50);
        setNextPageLoading(false);
      }, 1000);
    },
    [items]
  );

  const loadMoreItems = nextPageLoading ? () => { } : loadNextPageCb;

  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <>
      <InfiniteLoader
        itemCount={itemCount}
        isItemLoaded={isItemLoaded}
        hasNextPage={hasNextPage}
        loadMoreItems={loadMoreItems}
        threshold={15}
      >
        {({ onItemsRendered }) => (
          <ReactWindowScroller throttleTime={0}>
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
              >
                {RefForwardedRow}
              </List>
            )}
          </ReactWindowScroller>
        )}
      </InfiniteLoader>
    </>
  );
}
