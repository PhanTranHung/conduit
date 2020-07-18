import React from "react";
import { Row, Col } from "antd";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <Row align="middle" justify="center">
          <Col span={5}>
            <Link to="/">
              <div className="logo-border">
                <div className="logo-form">conduit</div>
              </div>
            </Link>
          </Col>
          <Col span={7} offset={12}>
            <NavLink
              exact
              className="success success-full_hover radius7 fake-button"
              activeClassName=" success-outline"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              className="success success-full_hover radius7 fake-button"
              activeClassName="success-outline"
              to="/sign-in"
            >
              Sign in
            </NavLink>
            <NavLink
              exact
              className="success success-full_hover radius7 fake-button"
              activeClassName=" success-outline"
              to="/sign-up"
            >
              Sign up
            </NavLink>
          </Col>
        </Row>
      </div>
    </nav>
  );
}

export default Header;
