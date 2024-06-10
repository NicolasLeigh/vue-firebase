<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleClick" class="delete">delete post</button>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
export default {
  props: ["id"],
  components: { Spinner },
  setup({ id }) {
    const route = useRoute();
    const router = useRouter();
    // const { post, error, load } = getPost(id);
    const { post, error, load } = getPost(route.params.id);
    load();

    const handleClick = async () => {
      await deleteDoc(doc(db, "posts", id));
      router.push({ name: "Home" });
    };

    return { post, error, handleClick };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>
