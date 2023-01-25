<template>
  <div
    class="row q-pa-xl q-gutter-md"
    style="border: 1px solid lime; height: 700px"
  >
    <div class="col">
      <ckeditor
        :editor="InlineEditor"
        v-model="inlineEditorData"
        style="border: 1px solid darkgoldenrod; height: 100px"
      />
    </div>
    <div class="col">
      <ckeditor
        :editor="classEditor"
        v-model="editorData"
        :style="style"
        @ready="onReady"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CKEditor from '@ckeditor/ckeditor5-vue';
import CKEDITOR from 'ckeditor5-custom-build';
import { useEditorStore } from 'src/stores/useEditorStore';
import { ref, watch } from 'vue';

const es = useEditorStore();

const ckeditor = CKEditor.component;
const classEditor = CKEDITOR.ClassicEditor;
const editorData = ref('ff');

const InlineEditor = CKEDITOR.InlineEditor;
const inlineEditorData = ref('dd');

const readyEditor = ref();
readyEditor.value = editorData;
const onReady = (editor: any) => {
  readyEditor.value = editor;
};

const darkMode = ref(false);
watch(
  () => es.isDarkMode,
  (newValue) => {
    darkMode.value = newValue;
    style();
  }
);

const style = () => {
  const toolbarStyle = readyEditor.value.ui.view.toolbar.element.style;
  const main = readyEditor.value.ui.view.element.lastChild.lastChild.style;

  if (es.isDarkMode) {
    toolbarStyle.backgroundColor = '#4a494b';
    main.backgroundColor = 'transparent';
  } else {
    toolbarStyle.backgroundColor = '#e2e2e2';
    main.backgroundColor = 'transparent';
  }
};
</script>

<style lang="scss" scoped></style>
