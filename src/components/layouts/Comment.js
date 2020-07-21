import React, { useState, useEffect } from "react";
import { Avatar, Badge, Button, List, Tag, Skeleton } from "antd";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";
import { connect } from "react-redux";
import { articleFetchRequest } from "../../actions/fetch-article-actions";
import { Link } from "react-router-dom";

function Comment({ state, articleFetchRequest, ...props }) {
  const [offset, setOffset] = useState(1);
  console.log("render commponent: comment " + offset + " Tab: " + props.tag);

  useEffect(() => {
    console.log(state);
    if (!state.tag[props.tag] || !state.tag[props.tag][offset]) {
      articleFetchRequest(props.tag, offset);
    }
    // eslint-disable-next-line
  }, [offset]);

  let generateTagChild = (tag, index) => (
    <Tag key={tag} color="lime">
      {tag}
    </Tag>
  );

  function itemRender(current, type, originalElement) {
    if (type === "prev") return <div>Previous</div>;
    if (type === "next") return <div>Next</div>;
    return originalElement;
  }

  const ghostLoading = (
    <>
      {[...Array(10).keys()].map((index) => (
        <Skeleton key={index} avatar active paragraph={{ rows: 5 }} />
      ))}
    </>
  );

  if (state.isLoading || !state.tag[props.tag]) return ghostLoading;

  const listComment = (
    <List
      itemLayout="vertical"
      dataSource={state.tag[props.tag][offset]}
      pagination={{
        pageSize: props.pageSize,
        total: state.articlesCount,
        defaultCurrent: 1,
        showQuickJumper: true,
        onChange: (offset) => setOffset(offset),
        itemRender: itemRender,
        current: offset,
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
              <Link to={`/topic/${item.slug}`}>
                <div>
                  <i>read more ...</i>
                </div>
              </Link>
              {props.tag && (
                <div className="tag-list" style={{ maxWidth: "65%" }}>
                  {item.tagList.map(generateTagChild)}
                </div>
              )}
            </div>,
          ]}
        >
          <Link to={`/profile/${item.author.username}`}>
            <List.Item.Meta
              avatar={<Avatar src={item.author.image} />}
              title={
                // <a href={`${server}#@${item.author.username}`}>
                item.author.username
                // </a>
              }
              description={item.updatedAt}
            />
          </Link>
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

export default connect((state) => ({ state: state.fetchArticle }), {
  articleFetchRequest,
})(Comment);
