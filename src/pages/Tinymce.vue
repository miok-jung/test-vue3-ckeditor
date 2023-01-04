<template>
  <div>
    <div class="text-h1">Tinymce</div>
    <!-- LINK: https://www.tiny.cloud/docs/tinymce/6/editor-size-options/ -->
    <!-- NOTE: init 설정하는 사이트 -->
    <textarea></textarea>

    <Editor
      api-key="no-api-key"
      :init="{
        // height: 200, // 메뉴부터 words까지의 전체 높이값, 최소 400이상 숫자로 입력
        // width: 350, // 메뉴부터 words까지의 전체 가로값 기본값은 따로 X
        selector: 'input#editable', // ??? 용도를 모르겠음 : input의 요소로 바꾸어 id는 editable로 들어간다.
        // inline: false, // 일반 글작성 에디터 혹은 input상단에 툴바를 보여주는 에디터를 할지 설정
        // hidden_input: false, // ???
        plugins: 'lists',
        menubar: 'file edit view', // 원래 있는데...??? 순서 변경은 가능 실제로 메뉴바로 보여질 순서를 정의 아래 메뉴 title과 동일하게 적용해야 해당 items값이 나온다.
        menu: {
          edit: { title: 'Edit', items: 'undo, redo, selectall' }, // menubar에서 설정한 제목들을 items로 원하는 것들만 넣을 수 있다.
        },
        toolbar: 'numlist bullist |',
      }"
      style="border: 1px solid red"
    />
    <ul>
      <li>api-key없이도 사용은 가능하며, 체험도 가능하다.</li>

      <li>:disabled="true"로 작성을 막을 수 있다.</li>
    </ul>
    <ol>
      <li>1. init skin의 용도는??</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue';
import { plugins } from 'cordova';

// const editor = Editor; 꼭 부를 필요 없이 다이렉트로 임포트한거로 사용할 수 있다.
</script>

<style scoped></style>
