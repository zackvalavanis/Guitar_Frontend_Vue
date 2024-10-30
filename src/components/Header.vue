<script>
import { RouterLink } from 'vue-router';

export default {
  name: "HeaderComponent",
  components: {
    RouterLink
  }
};
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/GuitarsIndex">Link</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
/* Add any styles here */
</style>
