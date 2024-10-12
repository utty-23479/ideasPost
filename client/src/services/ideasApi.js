import axios from "axios";
class IdeasApi {
  constructor() {
    this.apiUrl = "/api/ideas";
  }

  getIdeas() {
    return axios.get(this.apiUrl);
  }

  createIdeas(data) {
    return axios.post(this.apiUrl, data);
  }

  updateIdea(id, data) {
    return axios.put(`${this.apiUrl}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";
    return axios.delete(`${this.apiUrl}/${id}`, { data: { username } });
  }
}

export default new IdeasApi();
