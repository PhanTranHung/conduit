import React from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";
import Header from "./components/layouts/Header";
import Banner from "./components/layouts/Banner";
import TagList from "./components/layouts/TagList";
import TabContainer from "./containers/TabContainer";

const { Footer, Content } = Layout;

function App(props) {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header />
      <Banner />
      <Content className="page">
        <div className="container">
          <Row>
            <Col span="18">
              <TabContainer
                url="articles"
                limit="10"
                offset="0"
                pageSize="10"
              />
            </Col>
            <Col span="6">
              <TagList url="tags" title="Popular Tags" />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
