import React, { useContext } from "react";
import { Tabs } from "antd";
import Comment from "./Comment";
import { TagContext } from "../contexts/tag-context";

const { TabPane } = Tabs;

function Activities(props) {
  const [state, dispatch] = useContext(TagContext);
  // let activeTab = props.newTab.length > 0 ? props.newTab : "global";

  const removeClickedTag = () => {
    dispatch({
      type: "REMOVE_CLICKED_TAG",
    });
  };

  const hasSecondTab = state.key === "";

  return (
    <div>
      <Tabs
        activeKey={hasSecondTab ? "global" : state.key}
        onTabClick={removeClickedTag}
      >
        <TabPane tab="Global Feed" key="global">
          <Comment {...props} />
        </TabPane>

        <TabPane tab={!hasSecondTab ? `#${state.tab}` : ""} key={state.key}>
          <Comment {...props} tag={state.key} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Activities;
