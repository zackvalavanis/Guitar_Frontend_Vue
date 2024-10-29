<script>
import GuitarsIndex from "./GuitarsIndex.vue"
import axios from 'axios'

export default { 
  components: { 
    GuitarsIndex,
  },

  data: function () { 
    return { 
      guitars: [],
    };
  },

  created: function () { 
    this.handleIndexGuitars();
  }, 
  methods: { 
    handleIndexGuitars: function () { 
      axios.get('http://localhost:3000/guitars.json').then((response) => { 
        console.log("guitars index", response);
        this.guitars = response.data;
      });
    },
  },
};


</script>

<template>
  <main>
    <h1>Welcome to Vue!</h1>
    <GuitarsIndex v-bind:guitars="guitars"/>
  </main>
</template>

<style></style>