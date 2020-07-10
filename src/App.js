import React, { useState } from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";
import Header from "./components/layouts/Header";
import Banner from "./components/layouts/Banner";
import Activities from "./components/layouts/Activities";
import TagList from "./components/layouts/TagList";

const { Footer, Content } = Layout;

function App(props) {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header />
      <Banner />
      <Content className="page">
        <div className="container">
          <Row>
            <Col span="18">
              <Activities
                url="articles"
                limit="50"
                offset="0"
                pageSize="10"
                newTab={selectedTag}
                onTabChange={setSelectedTag}
              />
            </Col>
            <Col span="6">
              <TagList
                url="tags"
                title="Popular Tags"
                selectedTag={selectedTag}
                onSelectedTagChange={(tag) => {
                  setSelectedTag(tag);
                }}
              />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
