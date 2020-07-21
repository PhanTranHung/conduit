import React from "react";
import { Row, Col } from "antd";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/login-actions";

function Header({ state, logout, ...props }) {
  let headBar = null;

  if (!state.login.isLoading)
    if (state.login.isSigned)
      headBar = (
        <Link
          // to="/"
          className="success success-full_hover radius7 fake-button"
          onClick={() => logout()}
        >
          Sign out
        </Link>
      );
    else
      headBar = (
        <>
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
        </>
      );

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
            {headBar}
          </Col>
        </Row>
      </div>
    </nav>
  );
}

export default connect(
  (state) => ({
    state: {
      login: state.login,
    },
  }),
  { logout }
)(Header);
