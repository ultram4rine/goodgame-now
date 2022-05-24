import axios from "axios";

import { apiEndpoint } from ".";

import { loading } from "../stores/loading";

export const getUser = async () => {
  try {
    loading.set("loading");
    const resp = await axios.get(`${apiEndpoint}/user`);
    loading.set("loaded");
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
