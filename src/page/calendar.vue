<template>
  <div>
    <div class="titleCnt">
      <div class="infoCnt">
        <div class="cir"></div>日程表
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titleCnt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 180px 10px 80px;
}
.infoCnt,
.btnCnt {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cir {
  width: 10px;
  height: 10px;
  background: rgb(50, 100, 244);
  margin-right: 10px;
  border-radius: 50%;
}
</style>