<template>
  <div>
    <h1>Real Time</h1>
    <div v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snap) => {
      posts.value = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    });
    return { posts };
  },
};
</script>

<style></style>
