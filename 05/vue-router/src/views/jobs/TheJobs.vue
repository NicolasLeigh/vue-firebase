<template>
  <div>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>
            {{ job.title }}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // jobs: [
      //   { id: 1, title: 'UI Designer', details: 'This is job 1' },
      //   { id: 2, title: 'Web Developer', details: 'This is job 2' },
      //   { id: 3, title: 'Vue Developer', details: 'This is job 3' },
      // ],
      jobs: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background-color: antiquewhite;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background-color: #f0f0f0;
}
.job a {
  text-decoration: none;
}
</style>
