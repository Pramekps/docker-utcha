// import http from "../http-common";
import axios from "axios";
import ITutorialData from "../types/Tutorial";
import authHeader from "./auth-header";

const API_URL =
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api";

const getAll = () => {
  return axios.get(API_URL + "/tutorials", {
    headers: authHeader(),
  });
};

const get = (id: any) => {
  return axios.get(API_URL + `/tutorials/${id}`, { headers: authHeader() });
};

const create = (data: ITutorialData) => {
  return axios.post(API_URL + "/tutorials", data, {
    headers: authHeader(),
  });
};

const update = (id: any, data: ITutorialData) => {
  return axios.put(API_URL + `/tutorials/${id}`, data, {
    headers: authHeader(),
  });
};

const remove = (id: any) => {
  return axios.get(API_URL + `/tutorials/${id}`, { headers: authHeader() });
};

const removeAll = () => {
  return axios.delete(API_URL + `/tutorials`, { headers: authHeader() });
};

const findByTitle = (title: string) => {
  return axios.get(`/tutorials?title=${title}`, {
    headers: authHeader(),
  });
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
