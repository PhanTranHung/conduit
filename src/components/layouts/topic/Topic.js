import React, { useEffect } from "react";
import { Layout, Card, Avatar, Divider, Tag } from "antd";
import Banner from "../Banner";
import "./Topic.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { topicFetchRequest } from "../../../actions/fetch-topic-actions";

const { Meta } = Card;

function Topic({ state, topicFetchRequest, ...props }) {
  console.log(state);
  console.log(props);

  useEffect(() => {
    topicFetchRequest(props.match.params.slug);

    // eslint-disable-next-line
  }, []);
  if (state.error) return <h1>Something was wrong </h1>;
  if (!state.article || !state.article.body)
    return <h1>Something was wrong </h1>;

  console.log(state.article.author.image);
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
            <div className="toppic-title">{state.article.title}</div>
            <Link to={`/profile/${state.article.author.username}`}>
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
                    <Avatar src={state.article.author.image} />
                  </span>
                }
                title={state.article.author.username}
                description={state.article.updatedAt}
              />
            </Link>
          </Card>
        </div>
      </Banner>
      <Layout.Content className="page">
        <div className="container">
          <div>{state.article.body}</div>

          <div>
            {state.article.tagList.map((item, index) => (
              <Tag key="index" color="green">
                {item}
              </Tag>
            ))}
          </div>
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

export default connect((state) => ({ state: state.fetchTopic }), {
  topicFetchRequest,
})(Topic);
