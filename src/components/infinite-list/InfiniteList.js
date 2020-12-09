import React, {
  forwardRef,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { DynamicSizeList as List } from "react-window";
import { loremIpsum } from "lorem-ipsum";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import InfiniteListItem from "./InfiniteListItem";

const LoadingItem = (props) => {
  console.log(props);
  return <div>Loading...</div>;
};

const Row = (props) => {
  const { data, index, style, forwardedRef, isScrolling } = props;
  console.log(forwardedRef);

  const isLoadedRow = index < data.length;
  if (!isLoadedRow) {
    return (
      <div ref={forwardedRef} style={style}>
        {data.loadingItem}
      </div>
    );
  }
  return (
    <div
      ref={forwardedRef}
      style={{
        ...style,
        backgroundColor: index % 2 ? "white" : "#f0f0f0",
      }}
    >
      <br />
      {index}. {data[index]}
      <p>&nbsp;</p>
    </div>
  );
};

const RefForwardedRow = forwardRef((props, ref) => (
  <InfiniteListItem {...props} forwardedRef={ref} />
));

export default function InfiniteList(props) {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const loadNextPageCb = useCallback(
    (...args) => {
      setNextPageLoading(true);
      setTimeout(() => {
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
        setHasNextPage(nextItems.length < 100);
        setNextPageLoading(false);
      }, 5000);
    },
    [items]
  );

  const loadMoreItems = nextPageLoading ? () => {} : loadNextPageCb;

  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <>
      <div style={{ width: "100%", height: "600px" }}>
        <InfiniteLoader
          itemCount={itemCount}
          isItemLoaded={isItemLoaded}
          hasNextPage={hasNextPage}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <AutoSizer>
              {({ width, height }) => (
                <List
                  autoHeight
                  height={height}
                  width={width}
                  itemCount={itemCount}
                  itemData={{ items, loadingItem: <LoadingItem /> }}
                  ref={ref}
                  onItemsRendered={onItemsRendered}
                  useIsScrolling
                >
                  {RefForwardedRow}
                </List>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
    </>
  );
}
