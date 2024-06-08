<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['post'],
  setup({ post }) {
    const snippet = computed(() => {
      return post.body.substring(0, 100) + '...';
    });
    return { snippet };
  },
};
</script>

<style></style>
