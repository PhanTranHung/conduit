import React, { useState, useEffect } from "react";
import { Avatar, Badge, Button, List, Tag, Skeleton } from "antd";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";
import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_API;
const server = process.env.REACT_APP_SERVER;

axios.defaults.baseURL = baseUrl;
let isLoading = true;
const initAclicle = {
  //articles{page}[list]
  articles: {},
  articlesCount: 0,
};

function Comment(props) {
  const [articleList, setArticleList] = useState(initAclicle);
  const [page, setSelectedPage] = useState(1);
  console.log("render commponent: comment " + page + " Tab: " + props.tag);

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
    console.log("useEffect: comment " + page);
    if (!articleList.articles[page]) {
      isLoading = true;
      let isMounted = true;
      setArticleList(null);
      loadArticles(
        (data) => {
          isLoading = false;
          if (isMounted) {
            const d = Object.assign({}, articleList, {
              articles: { [page]: data.articles },
              articlesCount: data.articlesCount,
            });
            // console.log(d);
            setArticleList(d);
          }
        },
        { ...props, offset: page }
      );
      return () => (isMounted = false);
    }
    // eslint-disable-next-line
  }, [page]);

  let generateTagChild = (tag, index) => (
    <Tag key={index} color="lime">
      {tag}
    </Tag>
  );

  const changePage = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <div>Previous</div>;
    }
    if (type === "next") {
      return <div>Next</div>;
    }
    return originalElement;
  }

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
      dataSource={articleList.articles[page]}
      pagination={{
        pageSize: props.pageSize,
        total: articleList.articlesCount,
        defaultCurrent: 1,
        showQuickJumper: true,
        onChange: changePage,
        itemRender: itemRender,
        current: page,
        showSizeChanger: false,
      }}
      renderItem={(item) => (
        <List.Item
          extra={
            <Badge count={item.favoritesCount}>
              <Button type="text" shape="round" className="button-border-green">
                {item.favorited ? (
                  <HeartFilled />
                ) : (
                  <HeartTwoTone twoToneColor="#52c41a" />
                )}
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
