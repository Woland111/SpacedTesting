import axios from 'axios';
import { Skill } from '../models/skill';

const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

axios.interceptors.response.use(async response => {
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
    skill.creationTimestamp = '2021-12-18';
    console.log(skill);
    return httpRequests.post('skills', skill);
  },
  readAll: () => {
    const skills: Skill[] = [];
    return httpRequests.get<Skill[]>('skills').then(response => response.forEach(s => {
        s.nextTestOn = s.nextTestOn.split('T')[0];
        skills.push(s);
    })).then(response => skills);
  },
  update: (skill: Skill) => httpRequests.put(`skills/${skill.id}`, skill),
  delete: (id: string) => httpRequests.delete(`skills/${id}`),
};

export default skillsApi;
