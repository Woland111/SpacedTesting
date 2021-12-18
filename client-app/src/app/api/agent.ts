import axios from 'axios';
import { Skill } from '../models/skill';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const httpRequests = {
  get: (url: string) => axios.get(url).then((response) => response.data),
  post: (url: string, body: {}) =>
    axios.post(url, body).then((response) => response.data),
  put: (url: string, body: {}) =>
    axios.put(url, body).then((response) => response.data),
  delete: (url: string) => axios.delete(url).then((response) => response.data),
};

const skillsApi = {
  create: (skill: Skill) => httpRequests.post('skills', skill),
  readAll: () => httpRequests.get('skills'),
  update: (skill: Skill) => httpRequests.put(`skills/${skill.id}`, skill),
  delete: (id: string) => httpRequests.delete(`skills/${id}`),
};

export default skillsApi;
