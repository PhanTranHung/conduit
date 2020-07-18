import React from "react";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/layouts/Header";
import Signin from "./components/layouts/sign-in/Signin";
import Home from "./components/layouts/home/Home";
import Signup from "./components/layouts/sign-up/Signup";
import Topic from "./components/layouts/topic/Topic";
import Profile from "./components/layouts/profile/Profile";

import { Switch, Route } from "react-router-dom";

const { Footer } = Layout;

function App(props) {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header />
      <Switch>
        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/topic/:slug" component={Topic}>
          {/* <Topic /> */}
        </Route>
        <Route
          path="/profile/:slug"
          render={(propsRoute) => <Profile {...propsRoute} />}
        >
          {/* <Profile /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
