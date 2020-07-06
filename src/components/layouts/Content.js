import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Global Feed" key="1">
            <Comment {...this.props} />
          </TabPane>

          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Content;
