<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button :disabled="isPending">Log in</button>
  </form>
</template>

<script>
import useLogin from "../../composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) router.push({ name: "userPlaylists" });
    };

    return { email, password, error, handleSubmit, isPending };
  },
};
</script>

<style></style>
