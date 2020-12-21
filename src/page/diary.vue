<template>
  <div>
    <v-edit :dialogVisible="dialogVisible" @close="closeDialog" />
    <div class="titleCnt">
      <div class="infoCnt">
        <div class="cir"></div>个人日记
      </div>
      <div>
        <el-button @click="openDialog" type="primary">写日记</el-button>
      </div>
    </div>
    <div class="content">
      <el-card v-for="(value, key, index) in obj" :key="index" class="cardWidth">
          <div class="itemTitle">
            <div class="time">日期：{{key}}</div>
            <div>天气：{{value.wea}}</div>
          </div>
          <div class="ql-container ql-snow">
            <div class="ql-editor" v-html="value.content"></div>
          </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import edit from "../components/edit";
export default {
  name: "diary",
  components: {
    "v-edit": edit,
  },
  data() {
    return {
      dialogVisible: false,
      obj: localStorage.getItem('my_diary') && JSON.parse(localStorage.getItem('my_diary')) || {}
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog(bol) {
      this.dialogVisible = false;
      if (bol) {
        this.obj = JSON.parse(localStorage.getItem('my_diary'))
      }
    },
  },
};
</script>

<style scoped>
.titleCnt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 80px 10px 80px;
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
  padding: 30px 80px;
  width: 100%;
}
.cardWidth {
  width: 100%;
  margin-bottom: 20px;
}
.time {
  margin-bottom: 10px;
}
.itemTitle {
  display: flex;
  justify-content: space-between;
}
</style>
