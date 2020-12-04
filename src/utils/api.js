import axios from "axios";

export default function Api({ method, url, data, headers }) {
  return axios({
    method,
    url,
    data,
    headers,
  });
}
