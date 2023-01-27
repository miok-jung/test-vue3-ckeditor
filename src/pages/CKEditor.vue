<template>
  <div
    class="row q-pa-xl q-gutter-md"
    style="box-shadow: 5px 5px 5px aliceblue; height: 700px"
  >
    <div class="col">
      <InnerEditor />
    </div>
    <div class="col">
      <ClassicEditor />
    </div>
  </div>
</template>

<script setup lang="ts">
import InnerEditor from 'src/components/InnerEditor.vue';
import ClassicEditor from 'src/components/ClassicEditor.vue';
</script>

<style scoped></style>
