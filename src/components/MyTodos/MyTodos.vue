<script lang="ts" setup>
import { useMainStore } from '../../store/main';
import TodoItem from './TodoItem.vue';

const store = useMainStore();
</script>

<template>
  <div class="mytodos">
    <h1 class="mytodos--title">My Tasks</h1>
    <div class="todo--items">
      <TodoItem
        v-for="task in store.taskArray"
        v-if="store.taskArray.length > 0"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :complete="task.complete"
      />
      <h2 class="item--message" v-else>You dont have any todos...</h2>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<style>
@import '../../styles/mytodos.css';
</style>
