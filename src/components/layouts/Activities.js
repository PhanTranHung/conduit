import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";
// import { TagContext } from "../contexts/tag-context";

const { TabPane } = Tabs;

function Activities(props) {
  // console.log(props);
  const { state, removeThisTab, ...otherProps } = props;
  const hasSecondTab = state.key !== "";

  return (
    <div>
      <Tabs
        activeKey={hasSecondTab ? state.key : "global"}
        onTabClick={(tabName) => removeThisTab(tabName)}
      >
        <TabPane tab="Global Feed" key="global">
          <Comment {...otherProps} />
        </TabPane>

        {hasSecondTab && (
          <TabPane tab={`#${state.key}`} key={state.key}>
            <Comment {...otherProps} tag={state.key} />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default Activities;
