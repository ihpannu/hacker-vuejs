<template>
  <div class="view center box">
    <section>
      <ul>
        <li >
          <a class="description" :href="link.url"> {{link.description}}</a>
        </li>
        <li class="right">
          <a class="is-link" :href="link.url">
            <i class="fas fa-link"></i>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "LinkItem",
  props: ["link"]
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
