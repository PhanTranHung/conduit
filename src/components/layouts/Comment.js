import React, { useState, useEffect } from "react";
import { Avatar, Badge, Button, List, Tag, Skeleton } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_API;
const server = process.env.REACT_APP_SERVER;

axios.defaults.baseURL = baseUrl;
let isLoading = true;
const initAclicle = {
  articles: [],
  articlesCount: 0,
};

function Comment(props) {
  console.log("render commponent: Tag " + props.tag);
  const [articleList, setArticleList] = useState(initAclicle);

  async function loadArticles(
    func,
    { url = "", limit = 10, offset = 0, tag = "" } = {}
  ) {
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
      .then((res) => func(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    isLoading = true;
    let isMounted = true;
    setArticleList(null);
    loadArticles(
      (data) => {
        isLoading = false;
        if (isMounted) setArticleList(data);
      },
      { ...props }
    );
    return () => (isMounted = false);
    // eslint-disable-next-line
  }, []);

  let generateTagChild = (tag, index) => (
    <Tag key={index} color="lime">
      {tag}
    </Tag>
  );

  const ghostLoading = (
    <>
      <Skeleton avatar active paragraph={{ rows: 4 }} />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
    </>
  );

  if (isLoading || !articleList) return ghostLoading;

  const listComment = (
    <List
      itemLayout="vertical"
      dataSource={articleList.articles}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: props.pageSize,
      }}
      renderItem={(item) => (
        <List.Item
          extra={
            <Badge count={item.favorited ? item.favoritesCount : ""}>
              <Button type="text" shape="round" className="button-border-green">
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
              {props.tag && (
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

  return listComment;
}

export default Comment;
