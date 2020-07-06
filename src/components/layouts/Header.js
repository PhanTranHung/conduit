import React from "react";
import { Row, Col, Button } from "antd";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <Row align="middle" justify="center">
          <Col span={5}>
            <div className="logo-border">
              <div className="logo-form">conduit</div>
            </div>
          </Col>
          <Col span={7} offset={12}>
            <nav>
              <Button className="nav-item" type="text">
                <a href="/home">Home</a>
              </Button>
              <Button className="nav-item" type="text">
                <a href="/sign-in">Sign in</a>
              </Button>
              <Button className="nav-item" type="text">
                <a href="sign-up">Sign up</a>
              </Button>
            </nav>
          </Col>
        </Row>
      </div>
    </nav>
  );
}

export default Header;
