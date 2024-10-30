<script>
import axios from 'axios'

export default { 
  props: { 
    guitars: Array, 
  },
  
  created: function ()  {
    this.handleIndexGuitars();
    }, 
    methods: { 
      handleIndexGuitars: function () { 
        axios.get('http://localhost:3000/guitars.json').then((response) => { 
          console.log("Guitars Index", response);
          this.guitars = response.data;
        })




      }
    }






  }

</script>

<template>
  <header>
    <h1>All Guitars</h1>
    <div v-for="guitar in guitars" v-bind:key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <h2>{{ guitar.age }}</h2>
      <img v-bind:src="guitar.image"/>
      <button v-on:click="$emit('showGuitar', guitar)">More Info</button>
    </div>
  </header>
</template>

<style></style>