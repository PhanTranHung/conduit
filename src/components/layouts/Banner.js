import React from "react";
// import { Row, Col, Button, Divider } from "antd";

function Banner(props) {
  return (
    <div className="banner-border" style={props.style}>
      {props.children}
    </div>
  );
}

export default Banner;
