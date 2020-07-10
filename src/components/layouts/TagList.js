import React, { useState, useEffect } from "react";
import { Tag } from "antd";
import axios from "axios";
// import url from "url";

const { CheckableTag } = Tag;

const baseUrl = process.env.REACT_APP_SERVER_API;

axios.defaults.baseURL = baseUrl;

function TagList(props) {
  let [tags, setTag] = useState([]);

  async function getTags(func) {
    return axios
      .get(props.url)
      .then(func)
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("component");
    if (tags.length <= 0) getTags((res) => setTag(res.data.tags));
  }, []);

  useEffect(() => {});

  return (
    <div className="side-bar">
      <div className="side-bar-inner">
        <div className="tag-title">{props.title}</div>
        <div className="tag-list">
          {tags.map((tag, index) => (
            <CheckableTag
              key={tag}
              color="green"
              checked={props.selectedTag === tag}
              onChange={(checked) => props.onSelectedTagChange(tag)}
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
