import React from "react";
import { Tag } from "antd";
import axios from "axios";
// import url from "url";

const baseUrl = process.env.REACT_APP_SERVER_API;

axios.defaults.baseURL = baseUrl;

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  async getTags(func) {
    return axios
      .get(this.props.url)
      .then(func)
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getTags((res) => this.setState({ tags: res.data.tags }));
  }

  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-inner">
          <div className="tag-title">{this.props.title}</div>
          <div className="tag-list">
            {this.state.tags.map((tag, index) => (
              <Tag key={index} color="green">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TagList;
