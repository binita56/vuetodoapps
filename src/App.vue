<template>
  <div id="app">
    <TaskTodo
      v-bind:tasks="tasks"
      @add-task="addTask"
      @remove-task="removeTask"
      @complete-task="completeTask"
      @clear-completed="clearCompleted"
      @clear-all="clearAll"
    />
  </div>
</template>

<script>
import TaskTodo from "./components/TaskTodo.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    TaskTodo,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    },
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    completeTask(task) {
      task.completed = true;
    },
    clearCompleted() {
      this.tasks = this.tasks.filter((task) => !task.completed);
    },
    clearAll() {
      this.tasks = [];
    },
  },
};
</script>
