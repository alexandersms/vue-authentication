import Vue from "vue";
import Vuex from "vuex";
import auth0 from "auth0-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIsAuthorized: false,
    auth0: new auth0.WebAuth({
      domain: process.env.VUE_APP_AUTH_CONFIG_DOMAIN,
      clientID: process.env.VUE_APP_AUTH_CONFIG_CLIENTID,
      redirectUri: process.env.VUE_APP_DOMAINURL + "/auth0callback",
      responseType: process.env.VUE_APP_AUTH_CONFIG_RESPONSETYPE,
      scope: process.env.VUE_APP_AUTH_CONFIG_SCOPE,
    }),
  },
  mutations: {
    SET_USER_IS_AUTHENTICATED(state, replacement) {
      state.userIsAuthorized = replacement;
    },
  },
  actions: {
    auth0Login(context) {
      return context.state.auth0.authorize();
    },
  },
  modules: {},
});
