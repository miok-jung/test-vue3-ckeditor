<template>
  <ckeditor
    :editor="CKEDITOR.InlineEditor"
    v-model="inlineEditorData"
    :config="inlineEditorConfig"
    @ready="onReady"
    @mouseover="onMouseoverInlineEditor"
    @mouseleave="onMouseleaveInlineEditor"
    :style="[
      // es.isDarkMode ? inlineEditorDarkStyle : inlineEditorLightStyle,
      {
        color: es.isDarkMode ? 'lime' : 'darkgrey',
        border: es.isDarkMode ? '1px solid purple' : '1px solid orange', // 일반 테마보더
        '--border-color': inlineEditorStyle.border, // 포커스 보더
      },
    ]"
  >
  </ckeditor>
</template>

<script setup lang="ts">
import CKEDITOR from 'ckeditor5-custom-build';
import { useEditorStore } from 'src/stores/useEditorStore';
import { ref, watch, computed } from 'vue';
// import {
//   inlineEditorLightStyle,
//   inlineEditorDarkStyle,
// } from 'src/css/ckeditor';
// import '../css/_ckeditor.css';

const es = useEditorStore();

const inlineEditorData = ref('<p>test</p>');
const inlineEditorConfig = {
  //...
};
const readyEditor = ref();
const isFocus = ref(false);
// 에디터가 준비가 되었을 때 이벤트 실행

const onReady = (editor: any) => {
  readyEditor.value = editor;
  editor.focus(); // 페이지 올때 포커싱
  // focusTracker: 포커스가 되었는지 여부를 추적하기 위해서 사용
  // method-> focusTracker.on(event, callback) : 이벤트 발생시 실행할 콜백함수 등록
  // event-> change:isFocused : isFocused 속성값이 변경되면 시작된다.
  editor.ui.focusTracker.on('change:isFocused', () => {
    // 포커싱이 되었을때 변화를 주는 이벤트
    // isFocus.value는 에디터 클래스명이 ck-focused
    isFocus.value = [...editor.ui.view.editable.element.classList].includes(
      'ck-focused'
    );
  });
  // console.log('eidtor', editor);

  // 포커스 이벤트 종료후 테마 툴 변경
  themeToolbar();
};

// TODO: 포커스가 된 후 다크모드에 따라 변환 문제가 발생하여 추가된 코드(추후 체크가 필요)
// FIXME: 계속 다크모드 전환시 변수로 잘 들어가나, light모드로 변환이 되는 현상
// 더 나은 코드여부 판단필요
const inlineEditorStyle = computed(() => {
  if (isFocus.value) {
    return {
      border: es.isDarkMode ? 'red' : 'lime',
    };
  } else {
    return {};
  }
});
// 테마가 변환이 될때 툴바 설정 : CSS로 되지 않는 경우 여기에 가장 먼저 작성
const themeToolbar = () => {
  // console.log(readyEditor.value);
  const toolbarElBg = readyEditor.value.ui.view.toolbar.element.style;

  // NOTE: 인라인 에디터 보더값
  const panelElement = document.getElementsByClassName(
    'ck-toolbar-container'
  )[0] as HTMLElement;

  // console.log('toolbar', readyEditor.value.ui.view.toolbar);
  // console.log('panel', panelElement);
  panelElement.style.boxShadow = 'none';
  if (es.isDarkMode) {
    toolbarElBg.backgroundColor = '#4a494b'; // toolbar
    panelElement.style.border = '1px solid yellow'; // toolbar border
  } else {
    toolbarElBg.backgroundColor = '#f1f2f3';
    panelElement.style.border = '1px solid blue';
  }
};

// 인라인에디터 마우스호버이벤트
function onMouseoverInlineEditor() {
  const element = readyEditor.value.ui.view.editable.element;
  if (es.isDarkMode) {
    console.log('mouse over darkmode');
    element.style.border = '1px solid red';
  } else {
    console.log('mouse over lightmode');
    element.style.border = '1px solid red';
  }
}
function onMouseleaveInlineEditor() {
  const element = readyEditor.value.ui.view.editable.element;
  if (es.isDarkMode) {
    console.log('mouse leave darkmode');
    element.style.border = '1px solid purple';
  } else {
    console.log('mouse leave lightmode');
    element.style.border = '1px solid orange';
  }
}
watch(
  () => es.isDarkMode,
  () => {
    themeToolbar();
  }
);
</script>

<style scoped>
/* 에디터 기본 설정/테마는 따로 정의함 */
.ck.ck-content:not(.ck-comment__input *) {
  max-height: 200px;
  overflow-y: auto;
}
/* 에디터 포커스 입력칸 CSS */
.ck-focused {
  border: 1px solid var(--border-color, lime) !important;
}
</style>
