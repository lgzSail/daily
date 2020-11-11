<template>
  <div>

    <el-dialog :before-close="close" title="日记" :visible.sync="visible">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
      ></quill-editor>
      <el-button class="btn" @click="add" type="primary">添加</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  name: "edit",
  components: {
    quillEditor,
  },
  props: {
    dialogVisible: Boolean,
  },
  data() {
    return {
      content: null,
      editorOption: {},
      visible: this.dialogVisible
    };
  },
  watch: {
    dialogVisible(val) {
      this.visible = val
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    add() {
      const time = this.$moment().format("YYYY-MM-DD");
      const obj = localStorage.getItem('my_diary') && JSON.parse(localStorage.getItem('my_diary')) || {}
      obj[time] = {
        content: this.content,
        wea: window.wea
      }
      localStorage.setItem('my_diary', JSON.stringify(obj))
      this.$emit('close', true)
    }
  }
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
}
</style>