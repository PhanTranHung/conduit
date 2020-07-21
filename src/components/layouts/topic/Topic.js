import React, { useEffect, useState } from "react";
import { Layout, Card, Avatar, Divider, Tag, List, Button } from "antd";
import { RestOutlined } from "@ant-design/icons";
import Banner from "../Banner";
import "./Topic.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  topicFetchRequest,
  topicCommentFetchRequest,
  postComment,
  removeComment,
} from "../../../actions/topic-actions";
import CardComment from "./CardComment";

const { Meta } = Card;

function Topic({
  state,
  topicFetchRequest,
  topicCommentFetchRequest,
  postComment,
  removeComment,
  ...props
}) {
  const [comment, setComment] = useState("");
  // console.log(comment);
  // console.log("TOPIC STATE", state);
  // console.log("TOPIC PROPS", props);

  useEffect(() => {
    topicFetchRequest(props.match.params.slug);
    topicCommentFetchRequest(props.match.params.slug);
    // eslint-disable-next-line
  }, []);
  if (state.topic.error) return <h1>Something was wrong </h1>;
  if (!state.topic.article || !state.topic.article.body)
    return (
      <h1>
        <b>Loading</b>
      </h1>
    );

  // console.log("TOPIC AUTHOR IMAGE", state.topic.article.author.image);

  return (
    <>
      <Banner
        style={{
          backgroundColor: "black",
        }}
      >
        <div>
          <Card
            style={{
              backgroundColor: "#ffffff00",
              border: "none",
            }}
          >
            <div className="toppic-title">{state.topic.article.title}</div>
            <Link to={`/profile/${state.topic.article.author.username}`}>
              <Meta
                avatar={
                  <span
                    style={{
                      padding: "2px",
                      border: "1px solid white",
                      borderRadius: "50px",
                      display: "block",
                    }}
                  >
                    <Avatar src={state.topic.article.author.image} />
                  </span>
                }
                title={state.topic.article.author.username}
                description={state.topic.article.updatedAt}
              />
            </Link>
          </Card>
        </div>
      </Banner>
      <Layout.Content className="page">
        <div className="container">
          <h1>{state.topic.article.body}</h1>

          <div style={{ marginBottom: "50px" }}>
            {state.topic.article.tagList.map((item, index) => (
              <Tag key={index} color="green">
                {item}
              </Tag>
            ))}
          </div>

          {state.login.isSigned && (
            <CardComment
              actions={
                <>
                  <Avatar></Avatar>
                  <Button
                    style={{ width: "120px" }}
                    type="text"
                    htmlType="submit"
                    className="success success-full_hover success-outline login-form-button"
                    onClick={() => {
                      postComment(props.match.params.slug, comment);
                      setComment("");
                    }}
                  >
                    Post Comment
                  </Button>
                </>
              }
            >
              <textarea
                style={{ width: "100%", height: "200px" }}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              ></textarea>
            </CardComment>
          )}

          <List
            dataSource={state.comment.comments}
            // header={<Divider />}
            // footer={<Divider />}
            bordered
            itemLayout="vertical"
            renderItem={(item) => (
              <List.Item>
                <CardComment
                  actions={
                    <>
                      <span>
                        <Link to={`/profile/${item.author.username}`}>
                          <Avatar src={item.author.image} />
                          {item.author.username}
                        </Link>
                        <span> {item.updatedAt}</span>
                      </span>
                      {state.login.user &&
                        state.login.user.username === item.author.username && (
                          <span
                            onClick={() => {
                              removeComment(state.topic.article.slug, item.id);
                            }}
                          >
                            <RestOutlined
                              style={{ padding: "10px 20px", fontSize: "22px" }}
                              key="remove"
                            />
                          </span>
                        )}
                    </>
                  }
                >
                  <h4 style={{ width: "100%" }}>{item.body}</h4>
                </CardComment>
              </List.Item>
            )}
          ></List>

          <Divider plain>
            <b>
              <Link to="/sign-in">Sign in</Link> or &nbsp;
              <Link to="sign-up">sign up</Link> to add comments on this article.
            </b>
          </Divider>
        </div>
      </Layout.Content>
    </>
  );
}

export default connect(
  (state) => ({
    state: {
      topic: state.fetchTopic,
      comment: state.fetchTopicComments,
      login: state.login,
    },
  }),
  {
    topicFetchRequest,
    topicCommentFetchRequest,
    postComment,
    removeComment,
  }
)(Topic);
