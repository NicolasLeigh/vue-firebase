<template>
  <div class="navbar">
    <nav>
      <img src="../assets/ninja.png" alt="ninja" />
      <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <button>Logout</button>
        <router-link :to="{ name: 'login' }" class="btn">Login</router-link>
        <router-link :to="{ name: 'signup' }" class="btn">Signup</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
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
</style>
