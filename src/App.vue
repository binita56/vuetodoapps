<!-- App.vue -->
<template>
  <div id="app">
    <TaskTodo v-bind:tasks="tasks" @add-task="addTask" @remove-task="removeTask" @complete-task="completeTask" @clear-completed="clearCompleted" @clear-all="clearAll" />
  </div>
</template>

<script>
import TaskTodo from "./components/TaskTodo.vue";

export default {
  name: "App",
  components: {
    TaskTodo,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue JS",
          completed: true,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
    };
  },
  methods: {
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
      this.tasks = this.tasks.filter(task => !task.completed);
    },
    clearAll() {
      this.tasks = [];
    },
  },
};
</script>
