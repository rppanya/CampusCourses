import axios from "axios";
const baseURL = "https://camp-courses.api.kreosoft.space/";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  //console.log(config)
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response)
    return error.response;
  }
);

export default instance;
