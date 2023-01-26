<template>
  <ckeditor
    id="inline-editor"
    :editor="CKEDITOR.InlineEditor"
    v-model="inlineEditorData"
    :config="inlineEditorConfig"
    style="border: 1px solid blue; height: 100px"
    @ready="onReady"
  ></ckeditor>
</template>

<script setup lang="ts">
import CKEDITOR from 'ckeditor5-custom-build';
import { useEditorStore } from 'src/stores/useEditorStore';
import { ref, watch } from 'vue';

const es = useEditorStore();

const inlineEditorData = ref('<p>efjiejf </p>');
const inlineEditorConfig = {
  //...
};
// 에디터가 준비가 되었을 때 이벤트 실행
// const onReady = (editor: any) => {
//   console.log('onReady', editor);

//   editor.focus();
//   //   editor.setData(inlineEditorData.value); // X
// };
const darkMode = ref(false);
watch(
  () => es.isDarkMode,
  (newValue) => {
    darkMode.value = newValue;

    style();
  }
);

const style = () => {
  console.log('reada', inlineEditorData.value);

  //   const toolbarStyle = readyEditor.value.ui.view.toolbar.element.style;
  //   const main = readyEditor.value.ui.view.element.lastChild.lastChild.style;

  if (es.isDarkMode) {
  } else {
  }
};
</script>

<style scoped></style>
