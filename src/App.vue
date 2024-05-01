<template>
  <div id="app">
    <TaskTodo v-bind:tasks="tasks" />
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
};
</script>