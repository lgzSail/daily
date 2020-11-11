<template>
  <div class="nav">
    <div class="leftCnt">
      <el-tooltip
        v-for="item in navList"
        :key="item.name"
        class="item"
        effect="dark"
        :content="item.name"
        placement="right"
      >
        <div class="navItem" @click="navHref(item.path)">
          <img class="navIcon" :src="require(`../assets/${item.path}.png`)" alt />
        </div>
      </el-tooltip>
    </div>
    <div class="rightCnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import data from "@/data.js";

export default {
  name: "Nav",
  data: () => {
    return {
      navList: data.navList,
    };
  },
  methods: {
    navHref(item) {
      this.$router.push(item);
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  background: #fff;
  height: calc(100vh - 60px);
}
.navItem {
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px #888888;
  text-align: center;
  padding: 5px;
  margin: 30px auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.leftCnt {
  min-width: 216px;
  padding: 20px 60px;
  background: rgb(244, 247, 255);
}
.navIcon {
  width: 30px;
  margin-bottom: 5px;
}
.rightCnt {
  width: 100%;
}
</style>
