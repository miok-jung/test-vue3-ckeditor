<template>
  <div
    class="row q-pa-xl q-gutter-md"
    style="box-shadow: 5px 5px 5px aliceblue; height: 700px"
  >
    <div class="col">
      <InnerEditor />
    </div>
    <div class="col">
      <ckeditor
        :editor="classEditor"
        v-model="editorData"
        :style="style"
        @ready="onReady"
        id="ck-editor-classic"
        style="border: 1px solid red; display block;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CKEDITOR from 'ckeditor5-custom-build';
import { useEditorStore } from 'src/stores/useEditorStore';
import { ref, watch } from 'vue';
import InnerEditor from 'src/components/InnerEditor.vue';

const es = useEditorStore();

const classEditor = CKEDITOR.ClassicEditor;
const editorData = ref('ff');

const readyEditor = ref();
readyEditor.value = editorData;
const onReady = (editor: any) => {
  readyEditor.value = editor;
  style();
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

<style scoped></style>
