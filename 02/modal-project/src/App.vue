<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <!-- named slot -->
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway!</h1>
        <p>Sign up for free!</p>
      </Modal>
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
