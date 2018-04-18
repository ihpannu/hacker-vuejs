<template>
  <div class="container">
    <div class="loading"  v-if="loading">
      <ball-pulse-loader color="#42b983" size="20px"></ball-pulse-loader>
    </div>
    <div>
      <link-item v-for="link in allLinks" :key="link.id" :link="link"></link-item>
    </div>
  </div>
</template>

<script>
import { ALL_LINKS_QUERY } from "../constants/graphql";
import LinkItem from "./LinkItem";

export default {
  name: "LinkList",
  data() {
    return {
      allLinks: [],
      loading: 0
    };
  },
  components: {
    LinkItem
  },
  apollo: {
    allLinks: {
      query: ALL_LINKS_QUERY
    }
  }
};
</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
  padding-top: 3rem;
}
.container {
  padding: 2rem;
}
</style>
