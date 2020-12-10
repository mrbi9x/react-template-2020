import React, { forwardRef } from "react";
import { DynamicSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import InfiniteListItem from "./InfiniteListItem";

const RefForwardedRow = forwardRef((props, ref) => (
  <InfiniteListItem {...props} forwardedRef={ref} />
));

export default function InfiniteList(props) {
  const {
    totalItems,
    itemRender,
    itemLoadingRender,
    style,
    className,
    hasNextPage,
    nextPageLoading,
    loadNextPage,
  } = props;

  const loadMoreItems = nextPageLoading ? () => {} : loadNextPage;
  const itemCount = hasNextPage ? totalItems + 1 : totalItems;
  const isItemLoaded = (index) => !hasNextPage || index < totalItems;
  const itemData = {
    totalItems,
    ItemRender: itemRender,
    ItemLoadingRender: itemLoadingRender,
    isItemLoaded,
  };

  return (
    <>
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
                height={height}
                width={width}
                itemCount={itemCount}
                itemData={itemData}
                ref={ref}
                onItemsRendered={onItemsRendered}
                useIsScrolling={true}
                style={{ ...style }}
                className={className}
              >
                {RefForwardedRow}
              </List>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </>
  );
}
