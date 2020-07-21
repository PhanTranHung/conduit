import React from "react";

export default function CardComment(props) {
  return (
    <>
      <div>{props.children}</div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          backgroundColor: "#e4e4e4",
        }}
      >
        {props.actions}
      </div>
    </>
  );
}
