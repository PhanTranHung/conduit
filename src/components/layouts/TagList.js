import React from "react";
import { Tag } from "antd";
import axios from "axios";
// import url from "url";

const { CheckableTag } = Tag;

const baseUrl = process.env.REACT_APP_SERVER_API;

axios.defaults.baseURL = baseUrl;

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selectedTag: "",
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

  handleTagChange(checked, tag) {
    this.setState({ selectedTag: tag });
    this.props.onSelectedTagChange(tag);
  }

  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-inner">
          <div className="tag-title">{this.props.title}</div>
          <div className="tag-list">
            {this.state.tags.map((tag, index) => (
              <CheckableTag
                key={index}
                color="green"
                checked={this.state.selectedTag === tag}
                onChange={(checked) => this.handleTagChange(checked, tag)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TagList;
