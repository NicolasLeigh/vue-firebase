<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup({ post }) {
    const snippet = computed(() => {
      return post.body.substring(0, 100) + "...";
    });
    return { snippet };
  },
};
</script>

<style></style>
