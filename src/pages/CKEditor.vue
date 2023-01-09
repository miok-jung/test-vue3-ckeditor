<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
    <br />
    <hr />
    <br />
  </div>
  <div>
    <ckeditor :editor="inlineEditor" v-model="inlineEditorData" />
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
