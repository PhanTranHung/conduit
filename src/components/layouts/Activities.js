import React from "react";
import { Tabs } from "antd";
import Comment from "./Comment";

const { TabPane } = Tabs;

class Activities extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.newTab);
  //   if (this.props.newTab !== prevProps.newTab) {
  //     console.log(this.props.newTab);
  //   }
  // }

  handleClicked = (key, event) => {
    this.props.onTabChange("");
  };

  render() {
    // console.log(this.props.newTab);
    const activeTab =
      this.props.newTab.length > 0 ? this.props.newTab : "global";
    return (
      <div>
        <Tabs activeKey={activeTab} onTabClick={this.handleClicked}>
          <TabPane tab="Global Feed" key="global">
            <Comment {...this.props} />
          </TabPane>

          {activeTab !== "global" && (
            <TabPane tab={`#${this.props.newTab}`} key={this.props.newTab}>
              <Comment {...this.props} tag={this.props.newTab} />
            </TabPane>
          )}
        </Tabs>
      </div>
    );
  }
}

export default Activities;
