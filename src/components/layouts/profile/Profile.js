import React from "react";
import { Avatar, Button } from "antd";
import Banner from "../Banner";

export default function (props) {
  console.log(props);
  return (
    <>
      <Banner
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <Avatar
              size={110}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </div>
          <div>
            <b>lehdqlsl</b>
          </div>
        </div>
        <div>
          <Button
            type="text"
            htmlType="submit"
            className="success success-full_hover success-outline login-form-button"
          >
            Follow me
          </Button>
        </div>
      </Banner>
    </>
  );
}
