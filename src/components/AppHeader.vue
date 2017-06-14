<template>
  <header class="AppHeader">
    <span class="title">{{title}}</span>
    <div class="search-icon">
      <span class="fa fa-search"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      required: true,
      default: 'Home',
    },
  },
};
</script>

<style>

  .AppHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0;
    border-bottom: 1px solid #0f402a;
  }

  .AppHeader .title, .fa-search {
    padding: 0;
    font-size: 20px;
  }

  .AppHeader .fa-search {
    font-size: 24px;
  }

  .AppHeader .search-icon {
    height: 100%;
    border-left: 1px solid #ffffff;
    padding: 16px;
  }

</style>
