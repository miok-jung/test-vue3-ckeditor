<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn
          round
          flat
          dense
          :icon="darkmodeIcon"
          @click="toggleDarkMode()"
        />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in navArray"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { useEditorStore } from 'src/stores/useEditorStore';

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const es = useEditorStore();
const navArray = [
  {
    title: 'CKEditor',
    caption: 'Study to CKEditor',
    icon: 'school',
    to: '/ckeditor',
  },
  {
    title: 'Tinymce',
    caption: 'Study to Tinymce',
    icon: 'title',
    to: '/tinymce',
  },
];
const darkmodeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode'
);
const toggleDarkMode = () => {
  $q.dark.toggle();
  $q.localStorage.set('darkMode', $q.dark.isActive);
  es.isDarkMode = !es.isDarkMode;
  let body = document.getElementsByTagName('body')[0];

  // const setTheme = (theme: any) => (document.body.className = theme);
  if (es.isDarkMode) {
    console.log('DarkMode');

    body.classList.add('dark');
    body.classList.remove('light');
    // setTheme('body--dark dark');
  } else {
    console.log('LightMode');
    body.classList.add('light');
    body.classList.remove('dark');
    // setTheme('body--light light');
  }
};
</script>
