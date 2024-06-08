<template>
  <div class="home">
    <p>My name is {{ name }} and I am {{ age }} years old</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // const p = ref(null);

    const name = ref('mario');
    const age = ref(30);

    const handleClick = () => {
      name.value = 'luigi';
      age.value = 35;
    };

    return { name, age, handleClick };
  },
};
</script>
