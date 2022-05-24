import axios from "axios";

import { apiEndpoint } from ".";

export const getFavoriteStreams = async () => {
  try {
    const resp = await axios.get(`${apiEndpoint}/favorites`);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopStreamsOnPage = async (page) => {
  try {
    const resp = await axios.get(`${apiEndpoint}/streams?page=${page}`);
    return resp.data.streams;
  } catch (err) {
    console.log(err);
  }
};

export const getPages = async () => {
  try {
    const resp = await axios.get(`${apiEndpoint}/streams`);

    const count = resp.data.queryInfo.qty;
    const onPage = resp.data.queryInfo.onPage;

    if (count % onPage == 0) {
      return count / onPage;
    } else {
      return Math.trunc(count / onPage + 1);
    }
  } catch (err) {
    console.log(err);
  }
};
