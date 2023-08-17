<script lang="ts" setup>
import { onMounted } from 'vue';
import AddTodo from './components/AddTodo.vue';
import MyTodos from './components/MyTodos/MyTodos.vue';
import { useMainStore } from './store/main';

const store = useMainStore();
onMounted(() => {
  store.getArrayFromLocalStorage();
});
</script>

<template>
  <header class="header--blue"></header>

  <main class="main">
    <div class="main--content">
      <h1 class="main--title">Tasks</h1>
      <div class="main--components">
        <AddTodo />
        <MyTodos />
      </div>
    </div>
  </main>
</template>

<style>
@import './styles/app.css';
@import './styles/media.css';
</style>
