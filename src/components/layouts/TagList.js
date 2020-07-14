import React, { useState, useEffect } from "react";
import axios from "axios";
import SelecableTag from "../../containers/SelecableTag";

const baseUrl = process.env.REACT_APP_SERVER_API;
axios.defaults.baseURL = baseUrl;

function TagList(props) {
  const [tags, setTag] = useState([]);
  // console.log("Taglist");
  useEffect(() => {
    // console.log("component");
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
            <SelecableTag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TagList;
