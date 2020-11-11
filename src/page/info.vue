<template>
  <div class="info">
    <div class="titleCnt">
      <div class="infoCnt">
        <div class="cir"></div>个人信息
      </div>
      <div class="btnCnt">
        <el-button type="primary" size="mini">编辑</el-button>
      </div>
    </div>
    <div class="formCnt">
      <el-form ref="createForm" :model="createForm" label-width="160px" :inline="true">
        <el-form-item label="姓名">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="住址">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="喜好">
          <el-input size="mini" maxlength="30" class="inputWidth" v-model="createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="喜欢的一句话">
          <el-input
            autosize
            type="textarea"
            size="mini"
            class="inputWidth"
            v-model="createForm.name"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      createForm: {},
    };
  },
};
</script>

<style scoped>
.info {
}
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
.formCnt {
  padding: 30px;
}
.inputWidth {
  width: 320px;
}
</style>