import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function get(route, params) {
  const query = params
    ? "?" +
      Object.keys(params)
        .filter((key) => params[key])
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&")
    : "";

  return instance.get(`${route}${query}`);
}

export function post(route, payload) {
  return instance.post(route, payload);
}
