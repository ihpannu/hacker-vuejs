<template>

<div class="card ">
  <div class="card-content ">
    <span>{{linkNumber}}</span>
    <a :href="link.url" class="card-header-title">
      {{link.description}}
    </a>
  </div>
  <footer class="card-footer">
    <a v-if="userId" class="card-footer-item" @click="voteForLink()">▲</a>
    <a class=" is-link card-footer-item" :href="link.url">
      <i class="fas fa-link"></i>
    </a>
  </footer>
</div>

</template>

<script>
export default {
  name: "LinkItem",

  computed: {
    userId() {
      return this.$root.$data.userId;
    },
    linkNumber() {
      if (this.$route.path.includes("new"))
        return (this.pageNumber - 1) * this.linkPerPage + (this.index + 1);
      else return this.index + 1;
    }
  },
  props: ["link", "index"]
  // methods: {
  //   timeDifferenceForDate
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.view {
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    text-align: center;
    li {
      display: inline-block;
      padding: 0.5rem 0;
      a {
        color: #42b983;
        margin-left: auto;
        padding: 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
  .right {
    margin-left: auto;
  }
  .description {
    color: #363636;
    font-size: 1rem;
  }
}
</style>
