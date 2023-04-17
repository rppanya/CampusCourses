import axios from "axios";
const baseURL = "https://camp-courses.api.kreosoft.space/";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("No Auth 401!");
    } else {
      throw error;
    }
  }
);

export default instance;
