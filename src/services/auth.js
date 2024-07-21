import { baseApi } from "@/plugins/axios";

const api = '/auth';

const login = (body) => baseApi.post(`${api}/login`, body);
const signup = (body) => baseApi.post(`${api}/register`, body);

export { login, signup };