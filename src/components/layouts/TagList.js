import React, { useEffect } from "react";
import axios from "axios";
import SelecableTag from "../../containers/SelecableTag";
import { connect } from "react-redux";
import { fetchTagsRequest } from "../../actions/fetch-data-actions";
import { Skeleton } from "antd";

const baseUrl = process.env.REACT_APP_SERVER_API;
axios.defaults.baseURL = baseUrl;

function TagList({ state, fetchTagsRequest, ...props }) {
  // console.log(state);
  useEffect(() => {
    // console.log("component");
    debugger;
    fetchTagsRequest();
    // eslint-disable-next-line
  }, []);
  debugger;
  return (
    <div className="side-bar">
      <div className="side-bar-inner">
        <div className="tag-title">{props.title}</div>
        <div className="tag-list">
          <Skeleton loading={state.isLoading} active round />
          {state.data.map((tag, index) => (
            <SelecableTag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default connect((state) => ({ state: state.fetchTag }), {
  fetchTagsRequest,
})(TagList);
