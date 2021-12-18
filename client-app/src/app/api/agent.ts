import axios from 'axios';
import { Skill } from '../models/skill';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const httpRequests = {
  get: <T>(url: string) => axios.get<T>(url).then((response) => response.data),
  post: <T> (url: string, body: {}) =>
    axios.post<T>(url, body).then((response) => response.data),
  put: <T> (url: string, body: {}) =>
    axios.put<T>(url, body).then((response) => response.data),
  delete: <T> (url: string) => axios.delete<T>(url).then((response) => response.data),
};

const skillsApi = {
  create: (skill: Skill) => httpRequests.post('skills', skill),
  readAll: () => httpRequests.get<Skill[]>('skills'),
  update: (skill: Skill) => httpRequests.put(`skills/${skill.id}`, skill),
  delete: (id: string) => httpRequests.delete(`skills/${id}`),
};

export default skillsApi;
