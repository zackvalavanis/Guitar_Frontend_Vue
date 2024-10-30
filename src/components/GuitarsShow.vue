<script>
export default { 
  props: { 
    guitar: Object,
  },
};
</script>

<template>
  <div>
    <h1>Guitar Info</h1>
    <p>Name: {{ guitar.name }}</p>
    <p>Year: {{ guitar.year }}</p>
    <p>Price: {{ guitar.price }}</p>
  </div>
</template>

<style></style>