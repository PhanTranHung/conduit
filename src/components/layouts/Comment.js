import React from "react";
import { Avatar, Badge, Button, List, Tag, Skeleton } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_API;
const server = process.env.REACT_APP_SERVER;

axios.defaults.baseURL = baseUrl;

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesCount: 0,
    };
  }

  async loadComment(func, { url = "", limit = 10, offset = 0, tag = "" } = {}) {
    // articles?limit=10&offset=0
    return axios({
      method: "GET",
      url: url,
      params: {
        limit: limit,
        offset: offset,
        tag: tag,
      },
    })
      .then(func)
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    // debugger;
    this.loadComment(
      (res) => {
        this.setState({ ...res.data });
      },
      {
        ...this.props,
      }
    );
  }

  render() {
    const generateTagChild = (tag, index) => (
      <Tag key={index} color="lime">
        {tag}
      </Tag>
    );

    const commentList = (
      <List
        itemLayout="vertical"
        dataSource={this.state.articles}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: this.props.pageSize,
        }}
        renderItem={(item) => (
          <List.Item
            extra={
              <Badge count={item.favorited ? item.favoritesCount : ""}>
                <Button
                  type="text"
                  shape="round"
                  className="button-border-green"
                >
                  <HeartTwoTone twoToneColor="#52c41a" />
                </Button>
              </Badge>
            }
            className="custom-list"
            actions={[
              <div className="custom-list-item-content-action">
                <div>
                  <i>read more ...</i>
                </div>
                {this.props.tag && (
                  <div className="tag-list" style={{ maxWidth: "65%" }}>
                    {item.tagList.map(generateTagChild)}
                  </div>
                )}
              </div>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.image} />}
              title={
                <a href={`${server}#@${item.author.username}`}>
                  {item.author.username}
                </a>
              }
              description={item.updatedAt}
            />
            <div className="custom-list-item">
              <h1>{item.title}</h1>
              <div>{item.body}</div>
            </div>
          </List.Item>
        )}
      />
    );

    return commentList;
  }
}

export default Comment;
