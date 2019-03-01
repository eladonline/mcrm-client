import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const urlByEnv = publicRuntimeConfig.url;

export class Post {
  post = ({ url, body }) => {
    axios.post(`${urlByEnv}/${url}`, {
      data: body
    });
  };
}

export class Req {
  post({ url, body }) {
    return axios.post(`${urlByEnv}/${url}`, {
      data: body
    });
  }
  get({ url }) {
    return axios.get(`${urlByEnv}/${url}`);
  }
  delete(url) {
    return axios.delete(`${urlByEnv}/${url}`);
  }
  put({ url, body }) {
    return axios.put(`${urlByEnv}/${url}`, {
      data: body
    });
  }
}
