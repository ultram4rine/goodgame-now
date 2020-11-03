import axios from "axios";

const apiEndpoint = "https://goodgame.ru/api/4";

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
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
