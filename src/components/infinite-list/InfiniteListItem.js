import React from "react";

export default function InfiniteListItem(props) {
  const { data, index, style, forwardedRef } = props;
  console.log(props);
  const isLoadedRow = index < data.items.length;
  if (data.loadingItem && !isLoadedRow) {
    return (
      <div
        ref={forwardedRef}
        style={{
          ...style,
        }}
      >
        <p>Loading...</p>
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
      {index}. {data.items[index]}
      {data.loadingItem}
      <p>&nbsp;</p>
    </div>
  );
}
