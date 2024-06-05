<template>
  <div>
    <p>Reaction time: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja';
    } else if (this.score < 400) {
      this.rank = 'Samurai';
    } else {
      this.rank = 'Grasshopper';
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4rem;
  color: crimson;
  font-weight: bold;
}
</style>
