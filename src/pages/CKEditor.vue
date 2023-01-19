<template>
  <div
    class="row q-pa-lg q-gutter-md"
    style="border: 1px solid lime; height: 700px"
  >
    <div class="col" style="border: 1px solid blue">
      <ckeditor :editor="inlineEditor" v-model="inlineEditorData" />
    </div>
    <div class="col" style="border: 1px solid red">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        heigh="inherit"
        :config="editorConfig"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CKEditor from '@ckeditor/ckeditor5-vue';
import CKEDITOR from 'ckeditor5-custom-build';
import { ref } from 'vue';

const ckeditor = CKEditor.component;
const editor = CKEDITOR.ClassicEditor;
const editorData = ref('');
const editorConfig = '<p>Content of the editor.</p>';

const inlineEditor = CKEDITOR.InlineEditor;
const inlineEditorData = ref('');
</script>

<style scoped></style>
