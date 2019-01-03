<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/todos">ToDo一覧</router-link>
      </li>
      <li>
        <router-link to="/counter">カウンター</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'トップページ',
    };
  },
};
</script>

<style scoped>
.hello {
  padding: 24px;
}

h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  margin-bottom: 10px;
}
a {
  color: #42b983;
}
</style>
