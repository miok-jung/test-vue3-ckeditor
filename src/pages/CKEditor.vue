<template>
    <div>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
      <br>
      <hr>
      <br>
    </div>
  </template>
  
  <script setup lang="ts">
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import Editor from 'ckeditor5-custom-build';
  import { ref } from 'vue';
  
  const ckeditor = CKEditor.component;
  const editor = Editor;
  const editorData = ref('');
  const editorConfig = '<p>Content of the editor.</p>';
  </script>
  
  <style scoped></style>
  