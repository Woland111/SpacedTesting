import axios from 'axios';
import moment from 'moment';
import { Skill } from '../models/skill';

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

axios.interceptors.response.use(async (response) => {
  await sleep(2000);
  return response;
});

axios.defaults.baseURL = 'http://localhost:5000/api/';

const httpRequests = {
  get: <T>(url: string) => axios.get<T>(url).then((response) => response.data),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then((response) => response.data),
  put: <T>(url: string, body: {}) =>
    axios.put<T>(url, body).then((response) => response.data),
  delete: <T>(url: string) =>
    axios.delete<T>(url).then((response) => response.data),
};

const skillsApi = {
  create: (skill: Skill) => {
    skill.creationTimestamp = moment().toISOString().split('T')[0];
    return httpRequests.post('skills', skill);
  },
  readAll: () => {
    return httpRequests.get<Skill[]>('skills').then((data) =>
      data.map((s) => {
        return { ...s, ['nextTestOn']: s.nextTestOn.split('T')[0] };
      })
    );
  },
  readOne: (id: string) =>
    httpRequests.get<Skill>(`skills/${id}`).then((data) => {
      return { ...data, ['nextTestOn']: data.nextTestOn.split('T')[0] };
    }),
  update: (skill: Skill) => httpRequests.put(`skills/${skill.id}`, skill),
  delete: (id: string) => httpRequests.delete(`skills/${id}`),
};

export default skillsApi;
