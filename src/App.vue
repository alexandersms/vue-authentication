<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>
        <span>Vue Auth</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" class="mr-2" color="primary">Home</v-btn>
      <v-btn to="/about" class="mr-2" color="primary">About</v-btn>
      <v-btn to="/members" class="mr-2" color="primary">Members</v-btn>
      <v-btn to="/contact" class="mr-2" color="primary">Contact</v-btn>
      <v-btn
        @click="logout"
        v-if="this.$store.state.userIsAuthorized"
        class="mr-2"
        color="primary"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      clientId: process.env.VUE_APP_AUTH_CONFIG_CLIENTID,
    };
  },

  methods: {
    logout() {
      console.log("logging out");
    },
  },

  beforeCreate() {},
};
</script>
