<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const ninjaOne = ref({
      name: 'Ryu',
      age: 25,
    });
    // cannot use primitive values with reactive
    const ninjaTwo = reactive({
      name: 'Yoshi',
      age: 35,
    });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 30;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>
