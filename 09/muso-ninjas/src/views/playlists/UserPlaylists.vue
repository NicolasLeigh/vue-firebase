<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">{{ playlists[0].title }}</div>
  </div>
</template>

<script>
import getCollection from "../../composables/getCollection";
import getUser from "../../composables/getUser";
export default {
  setup() {
    const { user } = getUser();
    const { documents: playlists } = getCollection("playlists", ["userId", "==", user.value.uid]);

    return { playlists };
  },
};
</script>

<style></style>
