<template>
  <div class="section">
    <div class="box section is-medium ">
      Search
      <!-- 1 -->
      <b-field>
        <b-input placeholder="Search..." type="search" icon="magnify" v-model="searchText">
        </b-input>
      </b-field>
      <!-- <input type="text" v-model="searchText"> -->
    </div>
    <link-item v-for="(link, index) in allLinks" :key="link.id" :link="link" :index="index">
    </link-item>
  </div>
</template>


<script>
// 2
import { ALL_LINKS_SEARCH_QUERY } from "../constants/graphql";
import LinkItem from "./LinkItem";

export default {
  name: "Search",
  data() {
    return {
      allLinks: [],
      searchText: ""
    };
  },
  // 3
  apollo: {
    allLinks: {
      query: ALL_LINKS_SEARCH_QUERY,
      variables() {
        return {
          searchText: this.searchText
        };
      },
      skip() {
        return !this.searchText;
      }
    }
  },
  components: {
    LinkItem
  }
};
</script>