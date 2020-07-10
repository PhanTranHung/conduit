import React from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";
import Header from "./components/layouts/Header";
import Banner from "./components/layouts/Banner";
import Activities from "./components/layouts/Activities";
import TagList from "./components/layouts/TagList";
import { TagContextProvider } from "./components/contexts/tag-context";

const { Footer, Content } = Layout;

function App(props) {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header />
      <Banner />
      <Content className="page">
        <div className="container">
          <TagContextProvider>
            <Row>
              <Col span="18">
                <Activities
                  url="articles"
                  limit="50"
                  offset="0"
                  pageSize="10"
                />
              </Col>
              <Col span="6">
                <TagList url="tags" title="Popular Tags" />
              </Col>
            </Row>
          </TagContextProvider>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
