import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_API;
axios.defaults.baseURL = baseUrl;

export const tagUrl = {
  url: "tags",
};

export const articleUrl = {
  url: "articles",
  limit: 10,
  offset: "1",
  tag: "",
};

export const fetchArticles = (params) => {
  const { url, limit, offset, tag } = {
    ...articleUrl,
    ...params,
  };
  // api/articles?limit=10&offset=0
  return new Promise((resolve, rejects) => {
    axios({
      method: "GET",
      url: url,
      params: {
        limit: limit,
        offset: offset,
        tag: tag,
      },
    })
      .then((res) => resolve(res.data))
      .catch((err) => rejects(err));
  });
};

export const fetchTags = (props = tagUrl) => {
  // /api/tags
  return new Promise((resolve, rejects) => {
    axios({
      method: "GET",
      ...props,
    })
      .then((res) => resolve(res.data.tags))
      .catch((err) => rejects(err));
  });
};

export const fetchTopic = (slug) => {
  // /api/articles/{slug}
  console.log(slug);
  return new Promise((resolve, rejects) => {
    axios({
      method: "GET",
      url: `articles/${slug}`,
    })
      .then((res) => resolve(res.data.article))
      .catch((err) => rejects(err));
  });
};

export const fetchTopicComments = (slug) => {
  // /api/articles/{slug}/comments
  return new Promise((resolve, rejects) => {
    axios({
      method: "GET",
      url: `articles/${slug}/comments`,
    })
      .then((res) => resolve(res.data.comments))
      .catch((err) => rejects(err));
  });
};

export const login = ({ email, password, ...other }) => {
  // /api/users/login

  return new Promise((resolve, rejects) => {
    axios({
      method: "POST",
      url: `users/login`,
      data: {
        user: {
          email,
          password,
        },
      },
    })
      .then((res) => resolve(res.data.user))
      .catch((err) => rejects(err));
  });
};
