<template>
  <div>
    <!-- <div class="ql-container ql-snow">
      <div class="ql-editor" v-html="content"></div>
    </div>-->
    <el-dialog :before-close="close" title="日记" :visible.sync="visible">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
      ></quill-editor>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
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
    }
  }
};
</script>

<style scoped>
</style>