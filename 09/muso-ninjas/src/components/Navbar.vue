<template>
  <div class="navbar">
    <nav>
      <img src="../assets/ninja.png" alt="ninja" />
      <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'createPlaylist' }">Create Playlist</router-link>
          <router-link :to="{ name: 'userPlaylists' }">My Playlist</router-link>
          <span>Hi there, {{ user.displayName }} </span>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link :to="{ name: 'login' }" class="btn">Login</router-link>
          <router-link :to="{ name: 'signup' }" class="btn">Signup</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("logged out");
      router.push({ name: "login" });
    };
    return { logout, handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  padding: 16px 10px;
  margin-bottom: 60px;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>
