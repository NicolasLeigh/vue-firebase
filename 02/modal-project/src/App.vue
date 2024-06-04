<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
    </div>
    <button @click.alt="toggleModal">open modal (alt)</button>
  </div>
</template>

<script>
import Modal from './components/Modal-page.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'Hello World!',
      header: 'Sign up',
      text: 'sign up for more!',
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
