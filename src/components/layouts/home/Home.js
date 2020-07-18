import React from "react";
import TagList from "../TagList";
import TabContainer from "../../../containers/TabContainer";
import { Layout, Row, Col } from "antd";
import Banner from "../Banner";

export default function (props) {
  return (
    <>
      <Banner
        style={{
          textAlign: "center",
        }}
      >
        <div className="banner-title">
          <h1>Conduit</h1>
        </div>
        <div className="banner-content">
          <h4>A place to share your knowledge.</h4>
        </div>
      </Banner>
      <Layout.Content className="page">
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
      </Layout.Content>
    </>
  );
}
