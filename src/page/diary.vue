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
      <el-card class="cardWidth">
        <div>时间</div>
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
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
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
}
</style>