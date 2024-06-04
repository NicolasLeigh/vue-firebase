<template>
  <div>
    <h1>{{ title }}</h1>
    <teleport to="#modals" v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <!-- named slot -->
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway!</h1>
        <p>Sign up for free!</p>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Sign up for the newsletter</h1>
        <p>For promo codes!</p>
      </Modal>
    </teleport>
    <button @click.alt="toggleModal">open modal (alt)</button>
    <button @click="toggleModalTwo">open modal</button>
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
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
