<template>
  <div class="bill">
    <div class="titleCnt">
      <div class="infoCnt">
        <div class="cir"></div>账单
      </div>
      <div>
        <el-button @click="openDialog" type="primary">记账</el-button>
      </div>
    </div>
    <div>
      <div class="itemCnt" v-for="(value, key, index) in obj" :key="index">
        <div class="time">日期：{{key}}</div>
        <span>消费金额：</span>
        <span class="jin" v-for="(item, key1, index1) in value" :key="index1">{{item}}</span>
        <div class="total">总共消费：{{total(value)}}</div>
      </div>
    </div>
    <el-dialog title="记账" :visible.sync="visible">
      <el-input v-model="input" oninput="value=value.replace(/[^\d.]/g,'')"></el-input>
      <div class="btnCnt">
        <el-button @click="add" type="primary">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "bill",
  data() {
    return {
      visible: false,
      input: '',
      arr: [],
      obj: localStorage.getItem('my_bill') && JSON.parse(localStorage.getItem('my_bill')) || {}
    };
  },
  created() {
    const time = this.$moment().format("YYYY-MM-DD");
    const obj = localStorage.getItem('my_bill') && JSON.parse(localStorage.getItem('my_bill')) || {}
    this.arr = obj[time] || []
  },
  methods: {
    openDialog() {
      this.visible = true
    },
    add() {
      const time = this.$moment().format("YYYY-MM-DD");
      const arr = this.arr || []
      arr.push(this.input)
      this.arr = arr
      const obj = localStorage.getItem('my_bill') && JSON.parse(localStorage.getItem('my_bill')) || {}
      obj[time] = arr
      this.obj = obj
      localStorage.setItem('my_bill', JSON.stringify(obj))
      this.visible = false
      this.input = ''
    },
    total(arr) {
      let total = 0
      arr.map(item => {
        total += +item
      })
      return total
    }
  },
};
</script>

<style scoped>
.bill {
  padding: 30px 180px 10px 80px;
}
.titleCnt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.infoCnt {
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
.btnCnt {
  text-align: center;
  margin-top: 20px
}
.itemCnt {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}
.jin {
  margin-right: 10px;
}
.time {
  margin-bottom: 10px;
}
.total {
  text-align: end;
  margin-top: 5px
}
</style>