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

const $q = useQuasar();

const leftDrawerOpen = ref(false);

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
  console.log('click');
};
</script>
