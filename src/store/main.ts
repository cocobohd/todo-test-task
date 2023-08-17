import { defineStore } from 'pinia';

type taskObjectType = {
  name: string;
  complete: boolean;
  id: number;
};

export const useMainStore = defineStore('store', {
  state: () => ({
    taskArray: [] as taskObjectType[],
  }),
  actions: {
    async getArrayFromLocalStorage() {
      const array: string | any = localStorage.getItem('userTasks');
      this.taskArray = JSON.parse(array);
    },
    setToLocalStorage() {
      localStorage.setItem('userTasks', JSON.stringify(this.taskArray));
    },
    addTask(newTask: string) {
      const taskModel = {
        name: newTask,
        complete: false,
        id: new Date().getTime(),
      };
      this.taskArray.unshift(taskModel);
      this.setToLocalStorage();
    },
    changeCompleteStatus(id: number, comleteStatus: boolean) {
      const indexInArray = this.taskArray.findIndex((item) => {
        return item.id === id;
      });
      if (indexInArray !== -1) this.taskArray[indexInArray].complete = comleteStatus;
      this.setToLocalStorage();
    },
    removeTask(taskForRemove: number) {
      const indexInArray = this.taskArray.findIndex((item) => {
        return item.id === taskForRemove;
      });
      if (indexInArray !== -1) this.taskArray.splice(indexInArray, 1);
      this.setToLocalStorage();
    },
    editTask(taskForEdit: number, editedText: string | any) {
      const indexInArray = this.taskArray.findIndex((item) => {
        return item.id === taskForEdit;
      });
      if (indexInArray !== -1) this.taskArray[indexInArray].name = editedText;
      console.log(this.taskArray);
      this.setToLocalStorage();
    },
  },
});
