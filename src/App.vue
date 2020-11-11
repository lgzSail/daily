<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AxiosList from '@/axios'
export default {
  name: 'App',
  created() {
    this.getTianqi()
  },
  methods: {
    getTianqi() {
      AxiosList.getTianqi().then(res => {
        if (res) {
          window.wea = res.wea
        }
      })
    }
  }
}
</script>

<style>
#app {
    background: rgb(52, 100, 224);
    height: 100vh;
}
</style>
