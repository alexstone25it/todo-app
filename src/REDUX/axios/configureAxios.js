import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://the-todoodles.firebaseio.com/"
});
