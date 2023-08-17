<script lang="ts" setup>
import { ref } from 'vue';
import { useMainStore } from '../../store/main';

const props = defineProps({
  name: String,
  complete: Boolean,
  id: Number,
});

const store = useMainStore();

const completeModel = ref(props.complete);
const editIconRef = ref(null);
const isActiveEditClass = ref(false);
const isInputActiveTaskRef = ref(false);
const editInputRef = ref(props.name || null);

const changeComplete = (id) => {
  store.changeCompleteStatus(id, completeModel.value);
};
const deleteTask = (id) => {
  store.removeTask(id);
};
const activateButtonClasses = (command: string) => {
  if (command === 'add') {
    isActiveEditClass.value = true;
  } else if (command === 'remove') {
    isActiveEditClass.value = false;
  }
};
const editTaskFunc = (id) => {
  isInputActiveTaskRef.value = !isInputActiveTaskRef.value;
  store.editTask(id, editInputRef.value);
};
</script>

<template>
  <div
    class="item"
    @mouseenter="activateButtonClasses('add')"
    @mouseleave="activateButtonClasses('remove')"
  >
    <h1 class="item--title" v-if="!isInputActiveTaskRef">{{ props.name }}</h1>
    <input
      v-model.trim="editInputRef"
      type="text"
      class="edit-input"
      placeholder="edit here"
      v-else
    />
    <label class="switch">
      <input
        v-model="completeModel"
        type="checkbox"
        id="check"
        @change="changeComplete(props.id)"
      />
      <span class="slider round"></span>
    </label>

    <button class="delete-icon" @click="deleteTask(props.id)">
      <p class="delete-x">+</p>
    </button>
    <button
      @click="editTaskFunc(props.id)"
      class="edit-icon"
      ref="editIconRef"
      :class="isActiveEditClass && editInputRef?.length ? 'icon-active' : ''"
    >
      <img class="edit-e" src="./assets/edit-icon.png" alt="editimg" />
    </button>

    <p class="alert" v-if="!editInputRef?.length">min length 1 symbol</p>
  </div>
</template>

<style>
@import '../../styles/item.css';
</style>
