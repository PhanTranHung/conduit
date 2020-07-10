import React, { useState, useEffect, useContext } from "react";
import { Tag } from "antd";
import axios from "axios";

import { TagContext } from "../contexts/tag-context";

const { CheckableTag } = Tag;
const baseUrl = process.env.REACT_APP_SERVER_API;
axios.defaults.baseURL = baseUrl;

function TagList(props) {
  const [tags, setTag] = useState([]);
  const [state, dispatch] = useContext(TagContext);
  console.log(state);
  const addTag = (tag) => {
    dispatch({
      type: "CLICKED_TAG",
      payload: {
        key: tag,
        tab: tag,
      },
    });
  };

  useEffect(() => {
    console.log("component");
    const getTags = (func) => {
      return axios
        .get(props.url)
        .then(func)
        .catch((err) => console.log(err));
    };

    getTags((res) => setTag(res.data.tags));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="side-bar">
      <div className="side-bar-inner">
        <div className="tag-title">{props.title}</div>
        <div className="tag-list">
          {tags.map((tag, index) => (
            <CheckableTag
              key={tag}
              color="green"
              checked={state.key === tag}
              onChange={(checked) => addTag(tag)}
            >
              {tag}
            </CheckableTag>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TagList;
