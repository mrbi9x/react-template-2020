import React, { forwardRef, useState } from "react";
import { DynamicSizeList as List } from "react-window";
import { loremIpsum } from "lorem-ipsum";
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from "react-window-infinite-loader";
import { WindowScroller } from 'react-virtualized';
import { useCallback } from "react";

const Row = ({ data, index, style, forwardedRef }) => {
    const isLoadedRow = index < data.length;
    if (!isLoadedRow) {
        return (<div ref={forwardedRef} style={style}>
            Loading...
        </div>)
    }
    return (
        <div ref={forwardedRef} style={{ ...style, backgroundColor: index % 2 ? 'whitesmoke' : 'f8f8f0' }}>
            {data[index]}
            <br />
        </div>
    )
};

const RefForwardedRow = forwardRef((props, ref) => (
    <Row {...props} forwardedRef={ref} />
));

export default function InfiniteList() {
    const [items, setItems] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [nextPageLoading, setNextPageLoading] = useState(false);

    const loadNextPageCb = useCallback(
        (...args) => {
            console.log("Load next page", ...args);
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
                setHasNextPage(nextItems.length < 500);
                setNextPageLoading(false);
            }, 100);
        },
        [items]
    );

    const loadMoreItems = nextPageLoading ? () => { } : loadNextPageCb;

    const isItemLoaded = (index) => !hasNextPage || index < items.length;

    const itemCount = hasNextPage ? items.length + 1 : items.length;

    return (
        <>
            <div style={{ width: '50%', height: window.innerHeight - 200 }}>
                <InfiniteLoader
                    itemCount={itemCount}
                    isItemLoaded={isItemLoaded}
                    hasNextPage={hasNextPage}
                    loadMoreItems={loadMoreItems}
                >
                    {({ onItemsRendered, ref }) => (
                        <WindowScroller>
                            <AutoSizer>
                                {({ width, height }) => (
                                    <List
                                        height={height}
                                        width={width}
                                        itemCount={itemCount}
                                        itemData={items}
                                        ref={ref}
                                        //   outerRef={ref}
                                        //   style={style}
                                        onItemsRendered={onItemsRendered}
                                    >
                                        {RefForwardedRow}
                                    </List>
                                )}
                            </AutoSizer>
                        </WindowScroller>
                    )}
                </InfiniteLoader>
            </div>
        </>
    );
}
