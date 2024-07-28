import { defineStore } from "pinia";
import * as s$auth from '@/services/auth';
import { certCookies, setCookies, delCookies } from "../plugins/cookies";

const d$auth = defineStore({
  id: 'auth',
  state: () => ({
    id: undefined,
    name: undefined,
  }),
  actions: {
    async a$setUser() {
      try {
        const { password, name } = certCookies();
        this.password;
        this.name;
        return 'User Authenticated!';
        
      } catch ({ message }) {
        this.password = undefined;
        this.name = undefined;
        throw message;
      }
    },
    async a$login (body) {
      try {
        const { data } = await s$auth.login(body);
        setCookies('CERT', data.token, { datetime: data.expiresAt });
        this.a$setUser();
        return true;
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
    async a$logout() {
      try {
        delCookies('CERT');
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
  },
  getters: {
    g$user: ({ password, name }) => ({ password, name }),
  },
});

export default d$auth;