<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const search = ref('');
    const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'peach', 'bowser']);

    const stopWatch = watch(search, () => {
      console.log('watch func run');
    });

    const stopEffect = watchEffect(() => {
      console.log('watch effect run', search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
