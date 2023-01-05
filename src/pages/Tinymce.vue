<template>
  <div>
    <div class="text-h1">Tinymce</div>
    <!-- LINK: https://www.tiny.cloud/docs/tinymce/6/editor-size-options/ -->
    <!-- NOTE: init 설정하는 사이트 -->
    <Editor
      api-key="no-api-key"
      :init="{
        height: 400, // 메뉴부터 words까지의 전체 높이값, 최소 400이상 숫자로 입력
        // width: 350, // 메뉴부터 words까지의 전체 가로값 기본값은 따로 X
        selector: 'textarea', // ??? 용도를 모르겠음 : input의 요소로 바꾸어 id는 editable로 들어간다.
        // inline: false, // 일반 글작성 에디터 혹은 input상단에 툴바를 보여주는 에디터를 할지 설정
        // hidden_input: false, // ???
        content_css: 'tinymce-5-dark',
        plugins: 'lists wordcount preview fullscreen',
        statusbar: false,
        // menubar: 'file edit insert view format table tools help', // 원래 있는데...??? 순서 변경은 가능 실제로 메뉴바로 보여질 순서를 정의 아래 메뉴 title과 동일하게 적용해야 해당 items값이 나온다.
        menubar: 'file tools',
        menu: {
          file: { title: 'File', items: 'preview' },
          tools: { title: 'Tools', items: 'wordcount' },
        },
        toolbar: 'numlist bullist | wordcount preview fullscreen',
        // toolbar_location: 'bottom',
        table_use_colgroups: true,
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

// const editor = Editor; 꼭 부를 필요 없이 다이렉트로 임포트한거로 사용할 수 있다.
</script>

<style scoped></style>
