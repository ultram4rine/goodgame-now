import axios from "axios";

import { apiEndpoint } from ".";

import { loading } from "../stores/loading";

export const getFavoriteStreams = async () => {
  loading.set("loading");
  const resp = await axios.get(`${apiEndpoint}/favorites`);
  loading.set("loaded");
  return resp.data;
};

export const getTopStreamsOnPage = async (page) => {
  loading.set("loading");
  const resp = await axios.get(`${apiEndpoint}/streams?page=${page}`);
  loading.set("loaded");
  return resp.data.streams;
};

export const getPages = async () => {
  const resp = await axios.get(`${apiEndpoint}/streams`);

  const count = resp.data.queryInfo.qty;
  const onPage = resp.data.queryInfo.onPage;

  if (count % onPage == 0) {
    return count / onPage;
  } else {
    return Math.trunc(count / onPage + 1);
  }
};
