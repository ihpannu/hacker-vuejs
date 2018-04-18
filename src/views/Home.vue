<template>
  <div class="home">
    <!-- <CreateLink/> -->
    <LinkList />
  </div>
</template>

<script>
// @ is an alias to /src
import LinkList from "@/components/LinkList.vue";
// import CreateLink from "@/components/CreateLink.vue";

export default {
  name: "home",
  components: {
    LinkList
    // CreateLink
  }
};
</script>

