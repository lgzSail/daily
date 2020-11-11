<template>
  <div class="calendar">
    <div class="titleCnt">
      <div class="infoCnt">
        <div class="cir"></div>跑步签到
      </div>
      <div>
        <el-button @click="clock" type="primary">打卡</el-button>
      </div>
    </div>
    <div class="content">
      <el-card v-for="(value, key, index) in obj" :key="index">
          <div>{{key}}</div>
          <div class="success">打卡成功</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      obj: localStorage.getItem('my_calendar') && JSON.parse(localStorage.getItem('my_calendar')) || {}
    }
  },
  methods: {
    clock() {
      const time = this.$moment().format("YYYY-MM-DD");
      const obj = localStorage.getItem('my_calendar') && JSON.parse(localStorage.getItem('my_calendar')) || {}
      obj[time] = true
      localStorage.setItem('my_calendar', JSON.stringify(obj))
      this.obj = obj
    }
  }
};
</script>

<style scoped>
.titleCnt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
.content {
  margin-top: 20px;
  width: 100%;
}
.success {
  margin-top: 10px;
}
.calendar {
  padding: 30px 180px 10px 80px;

}
</style>