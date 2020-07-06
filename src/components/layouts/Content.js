import React from "react";
import { Tabs } from "antd";
import TabItem from "./TabItem";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabItem tab="Global Feed" {...this.props} key="1" />
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
