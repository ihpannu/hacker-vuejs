<template>
 <div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="nav">
      <div>
        <router-link to="/">
          <a>Hacker News</a>
        </router-link>
      </div>
      <div class=" nav">
        <a>
          <router-link to="/">New</router-link>
        </a>
        <span>|</span>
        <a>
          <router-link to="/create">Submit</router-link>
        </a>
        <span>|</span>
        <a id="con-login">
          <a v-if="userId" class="button is-small has-text-white is-danger" @click="logout()">Logout</a>
          <a v-else class="button is-small is-warning">
            <router-link to="/login">Login</router-link></a>
        </a>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from "../constants/settings";

export default {
  name: "AppHeader",
  computed: {
    userId() {
      return this.$root.$data.userId;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem(GC_USER_ID);
      localStorage.removeItem(GC_AUTH_TOKEN);
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  padding: 30px;
  a {
    padding: 0 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav {
  margin-left: auto;
}
#con-login {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #666666;
      // background-color: #2c3e50;
    }
  }
}
</style>