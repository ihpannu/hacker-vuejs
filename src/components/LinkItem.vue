<template>

<div class="card ">
  <div class="card-content ">
    <span>{{linkNumber}}</span>
    <p :href="link.url" class="card-header-title">
      {{link.description}}
          <a class=" is-link card-footer-item" :href="link.url">
      <i class="fas fa-link"></i>
    </a>
    </p>
  </div>
  <footer class="card-footer">
    <a v-if="userId" class="card-footer-item" @click="voteForLink()">▲</a>

    <p class="card-footer-item">
      {{link.votes.length}} votes | by {{link.postedBy ? link.postedBy.name : 'Unknown'}} {{timeDifferenceForDate(link.createdAt)}}
    </p>
  </footer>
</div>

</template>

<script>
import { timeDifferenceForDate } from "../utils";
import { CREATE_VOTE_MUTATION } from "../constants/graphql";
import { GC_USER_ID } from "../constants/settings";
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
  props: ["link", "index"],
  methods: {
    timeDifferenceForDate,
    voteForLink() {
      const userId = localStorage.getItem(GC_USER_ID);
      const voterIds = this.link.votes.map(vote => vote.user.id);
      if (voterIds.includes(userId)) {
        alert(`User (${userId}) already voted for this link.`);
        return;
      }
      const linkId = this.link.id;
      this.$apollo.mutate({
        variables: {
          userId,
          linkId
        }
      });
    }
  }
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
