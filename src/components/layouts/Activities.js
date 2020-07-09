import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";

const { TabPane } = Tabs;

function Activities(props) {
  let activeTab = props.newTab.length > 0 ? props.newTab : "global";
  return (
    <div>
      <Tabs activeKey={activeTab} onTabClick={() => props.onTabChange("")}>
        <TabPane tab="Global Feed" key="global">
          <Comment {...props} />
        </TabPane>

        {activeTab !== "global" && (
          <TabPane tab={`#${props.newTab}`} key={props.newTab}>
            <Comment {...props} tag={props.newTab} />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default Activities;
