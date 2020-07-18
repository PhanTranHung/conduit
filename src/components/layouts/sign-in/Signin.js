import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./signin.css";
import { loginRequest } from "../../../actions/login-actions";
import { connect } from "react-redux";

function Signin({ state, loginRequest, ...props }) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    loginRequest(values.email, values.password);
  };
  return (
    <div className="container">
      <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "150px" }}>
        <h1>Sign In</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/forgot">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="text"
              htmlType="submit"
              className="success success-full_hover success-outline login-form-button"
            >
              Log in
            </Button>
            &nbsp; Or &nbsp;<a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default connect((state) => ({ state: state.login }), { loginRequest })(
  Signin
);
