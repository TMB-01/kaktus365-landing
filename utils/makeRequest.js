import axios from "axios";
import { BASE_URL } from "../constants/link";

export const makeRequest = ({ method, path, data, params }) => {
  return axios({
    method,
    url: `${BASE_URL}/${path}`,
    data,
    params,
  });
};
