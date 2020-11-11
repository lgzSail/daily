<template>
  <div>
    <div class="header">
      <img class="icon" src="@/assets/logo.jpg" />
      <div class="icon-cnt">
        <i-remind class="iconItem" />
        <i-help class="iconItem" />
        <i-setting class="iconItem" />
        <i-out class="iconItemLast" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 85px;
  justify-content: space-between;
}
.icon {
  height: 32px;
  border-radius: 50%;
}
.icon-cnt {
  display: flex;
  align-items: center;
}
.iconItem {
  margin: 0 20px;
}
.iconItemLast {
  margin-left: 20px;
}
</style>
