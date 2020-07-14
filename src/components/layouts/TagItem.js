import React from "react";
import { Tag } from "antd";

const TagItem = (props) => {
  // console.log("rerender tag: " + props.tag);
  const { state, changeTab } = props;
  return (
    <Tag.CheckableTag
      color="green"
      //state.key is the value of checked tag
      checked={state.key === props.tag}
      onChange={(checked) => changeTab(props.tag)}
    >
      {props.tag}
    </Tag.CheckableTag>
  );
};

export default TagItem;
