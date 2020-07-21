import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";
// import { TagContext } from "../contexts/tag-context";

const { TabPane } = Tabs;

function Activities({ state, clickedTab, ...props }) {
  // console.log(props);
  const hasThirdTab =
    state.changeTab.key !== "global" && state.changeTab.key !== "your";

  return (
    <div>
      <Tabs
        defaultActiveKey="global"
        activeKey={state.changeTab.key}
        onTabClick={(tabName) => clickedTab(tabName)}
      >
        {!state.login.isLoading && state.login.isSigned ? (
          <TabPane tab="Your Feed" key="your">
            <Comment {...props} tag="" />
          </TabPane>
        ) : null}

        <TabPane tab="Global Feed" key="global">
          <Comment {...props} tag="" />
        </TabPane>

        {hasThirdTab && (
          <TabPane tab={`#${state.changeTab.key}`} key={state.changeTab.key}>
            <Comment {...props} tag={state.changeTab.key} />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default Activities;
