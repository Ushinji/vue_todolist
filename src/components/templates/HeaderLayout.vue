<template>
  <div class="main-view">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '../molecules/Header';

export default {
  name: 'HeaderLayout',
  components: {
    Header,
  },
};
</script>

<style>
.main-view {
  max-width: 800px;
  margin: 0 auto;
}

.main-content {
  margin-top: 48px;
}
</style>

