import axios from "axios";
import authHeader from "./auth-header";

const API_URL =
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "/test/all");
  }

  getUserBoard() {
    return axios.get(API_URL + "/test/user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "/test/mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "/test/admin", { headers: authHeader() });
  }
}

export default new UserService();
