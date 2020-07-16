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
  // articles?limit=10&offset=0
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
  return new Promise((resolve, rejects) => {
    axios({
      method: "GET",
      ...props,
    })
      .then((res) => resolve(res.data.tags))
      .catch((err) => rejects(err));
  });
};
