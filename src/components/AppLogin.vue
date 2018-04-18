<template>
<div class="hero-body">
  <!-- <form> -->
    <div class="box">
      <h4 class='mv3 '>{{login ? 'Login' : 'Sign Up'}}</h4>
      <div class="field">
        <div class="control">
          <input v-show="!login" v-model="name" autofocus class="input" type="text" placeholder="Your Name">
        </div>
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input v-model="email" class="input" type="email" autofocus placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="password" class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <button @click="confirm()" class="button is-primary">
            {{login ? 'Sign In' : 'Create Account'}}
          </button>
        </p>
        <p class="control">
          <button @click="login = !login" class="button is-dark">
            {{login ? 'Sign Up' : 'Sign in'}}
          </button>
        </p>
      </div>
    </div>
  <!-- </form> -->

</div>


</template>

<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from "../constants/settings";
import {
  CREATE_USER_MUTATION,
  SIGNIN_USER_MUTATION
} from "../constants/graphql";

export default {
  name: "AppLogin",
  data() {
    return {
      email: "",
      login: true,
      name: "",
      password: ""
    };
  },
  methods: {
    confirm() {
      const { name, email, password } = this.$data;
      if (this.login) {
        this.$apollo
          .mutate({
            mutation: SIGNIN_USER_MUTATION,
            variables: {
              email,
              password
            }
          })
          .then(result => {
            const id = result.data.signinUser.user.id;
            const token = result.data.signinUser.token;
            this.saveUserData(id, token);
          })
          .catch(error => {
            alert(error);
          });
      } else {
        this.$apollo
          .mutate({
            mutation: CREATE_USER_MUTATION,
            variables: {
              name,
              email,
              password
            }
          })
          .then(result => {
            const id = result.data.signinUser.user.id;
            const token = result.data.signinUser.token;
            this.saveUserData(id, token);
          })
          .catch(error => {
            alert(error);
          });
      }
      this.$router.push({ path: "/" });
    },
    saveUserData(id, token) {
      localStorage.setItem(GC_USER_ID, id);
      localStorage.setItem(GC_AUTH_TOKEN, token);
      this.$root.$data.userId = localStorage.getItem(GC_USER_ID);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
