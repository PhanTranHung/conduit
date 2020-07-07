import React from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";
import Header from "./components/layouts/Header";
import Banner from "./components/layouts/Banner";
import Activities from "./components/layouts/Activities";
import TagList from "./components/layouts/TagList";

const { Footer, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: "",
    };
    this.selectedTag = "";
  }

  changeTab = (tag) => {
    this.setState({
      selectedTag: tag,
    });
    // this.selectedTag = tag;
  };

  render() {
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
                  newTab={this.state.selectedTag}
                  onTabChange={this.changeTab}
                />
              </Col>
              <Col span="6">
                <TagList
                  url="tags"
                  title="Popular Tags"
                  onSelectedTagChange={this.changeTab}
                />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;
