import axios, { AxiosRequestConfig } from "axios";

const fetcher = async (url: string, config: AxiosRequestConfig) => {
  try {
    const r = await axios.get(url, config);
    return r.data;
  } catch (error) {
    return error;
  }
};

export default fetcher;
