<script lang="ts" setup>
import { useMainStore } from '../store/main';
import { ref } from 'vue';

const store = useMainStore();
const inputModel = ref('');

const addNewTask = () => {
  store.addTask(inputModel.value);
  inputModel.value = '';
};
</script>

<template>
  <div class="addtodo">
    <h1 class="addtodo--title">Add Task</h1>
    <input v-model.trim="inputModel" class="addtodo--input" placeholder="Write a task" />
    <button class="addtodo--btn" :class="inputModel.length ? 'active' : ''" @click="addNewTask">
      Add
    </button>
  </div>
</template>

<style>
@import '../styles/addtodo.css';
</style>
