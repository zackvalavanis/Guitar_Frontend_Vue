<script>
export default { 
  props: { 
    guitars: Array, 
  },
}

</script>

<template>
  <header>
    <h1>All Guitars</h1>
    <div v-for="guitar in guitars" v-bind:key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <h2>{{ guitar.age }}</h2>
      <img v-bind:src="guitar.image"/>
    </div>
  </header>
</template>

<style></style>