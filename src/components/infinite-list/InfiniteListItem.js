import React from "react";

export default function InfiniteListItem(props) {
  const { data, index, style, forwardedRef, isScrolling } = props;
  const { totalItems, ItemRender, ItemLoadingRender, isItemLoaded } = data;

  if (!isItemLoaded(index)) {
    return (
      <div
        ref={forwardedRef}
        style={{
          ...style,
        }}
      >
        {ItemLoadingRender ? <ItemLoadingRender {...props} /> : undefined}
      </div>
    );
  }

  return (
    <div
      ref={forwardedRef}
      style={{
        ...style,
      }}
    >
      {ItemRender ? <ItemRender {...props} /> : undefined}
    </div>
  );
}
