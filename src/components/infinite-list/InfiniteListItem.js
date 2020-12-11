import React from "react";

export default function InfiniteListItem(props) {
  const { data, index, style, forwardedRef } = props;
  const { ItemRender, ItemLoadingRender, isItemLoaded = true } = data;

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
