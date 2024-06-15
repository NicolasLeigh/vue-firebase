<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
        <ListView :playlists="documents" />
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import ListView from "../components/ListView.vue";
export default {
  name: "HomeView",
  components: { ListView },
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>
