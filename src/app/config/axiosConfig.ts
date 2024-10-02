import axios from "axios";

const CORE_APP_BASE_URL = process.env.NEXT_PUBLIC_CORE_APP_BASE_URL;

const instance = axios.create({
  baseURL: CORE_APP_BASE_URL
});

export default instance;