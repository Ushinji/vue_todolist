<template>
  <div class="main-header">
    <div class="main-header--content">
      <span>Sample App by using Vue.js</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
  .main-header {
    height: 48px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12);
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .main-header--content {
    max-width: 800px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  span {
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #5f6368;
  }
</style>
