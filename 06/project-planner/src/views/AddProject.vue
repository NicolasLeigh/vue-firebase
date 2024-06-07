<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" v-model="title" required />
    <label for="details">Details</label>
    <textarea id="details" name="details" v-model="details" required></textarea>
    <button type="submit">Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: #00b74a;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
