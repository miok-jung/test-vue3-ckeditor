<template>
  <ckeditor
    :editor="classEditor"
    v-model="editorData"
    :config="classicEditorConfig"
    @ready="onReady"
    @mouseover="onMouseoverInlineEditor"
    @mouseleave="onMouseleaveInlineEditor"
    :style="{
      '--border-color': classicEditorStyle.border, // 포커스 보더
      '--hover-border': 'red !important',
    }"
  />
</template>

<script setup lang="ts">
import CKEDITOR from 'ckeditor5-custom-build';
import { useEditorStore } from 'src/stores/useEditorStore';
import { ref, computed, watch } from 'vue';

const es = useEditorStore();

const classEditor = CKEDITOR.ClassicEditor;
const editorData = ref('<p>test</p>');
const classicEditorConfig = {
  //...
};

const readyEditor = ref();
const isFocus = ref(false);
readyEditor.value = editorData;
const onReady = (editor: any) => {
  readyEditor.value = editor;
};

const classicEditorStyle = computed(() => {
  if (isFocus.value) {
    return {
      border: es.isDarkMode ? '#a554a7' : '#ed8fa5',
    };
  } else {
    return {};
  }
});
// 인라인에디터 마우스호버이벤트
function onMouseoverInlineEditor() {
  const element = readyEditor.value.ui.view.editable.element;
  if (es.isDarkMode) {
    console.log('mouse over darkmode');
    element.style.border = '1px solid #a554a7';
  } else {
    console.log('mouse over lightmode');
    element.style.border = '1px solid #ed8fa5';
  }
}
function onMouseleaveInlineEditor() {
  const element = readyEditor.value.ui.view.editable.element;
  if (es.isDarkMode) {
    console.log('mouse leave darkmode');
    element.style.border = '1px solid #414141';
  } else {
    console.log('mouse leave lightmode');
    element.style.border = '1px solid #e0e0e0';
  }
}
watch(es, () => {
  console.log('ff');
  console.log(
    'set',
    document.documentElement.style.getPropertyValue('--hover-border')
  );
});
</script>

<style scoped>
.ck-focused {
  border: 1px solid var(--border-color) !important;
}
</style>
