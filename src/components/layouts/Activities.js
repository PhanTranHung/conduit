import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";
// import { TagContext } from "../contexts/tag-context";

const { TabPane } = Tabs;

function Activities({ state, removeThisTab, ...props }) {
  // console.log(props);
  const hasSecondTab = state.key !== "";

  return (
    <div>
      <Tabs
        activeKey={hasSecondTab ? state.key : "global"}
        onTabClick={(tabName) => removeThisTab(tabName)}
      >
        <TabPane tab="Global Feed" key="global">
          <Comment {...props} />
        </TabPane>

        {hasSecondTab && (
          <TabPane tab={`#${state.key}`} key={state.key}>
            <Comment {...props} tag={state.key} />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default Activities;
