<script>
import GuitarsIndex from "./GuitarsIndex.vue"
import axios from 'axios'
import GuitarsNew from './GuitarsNew.vue'

export default { 
  components: { 
    GuitarsIndex,
    GuitarsNew,
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
    handleCreateGuitar: function (params) { 
      axios
      .post('http://localhost:3000/guitars.json', params).then((response) => { 
        console.log("Guitars Create", response);
        this.photos.push(response.data);
      })
      .catch((error) => { 
        console.log("guitars create error", error.response)
      })
    },
  },
};

</script>

<template>
  <main>
    <h1>Welcome to Vue!</h1>
    <GuitarsNew v-on:createGuitar="handleCreateGuitar"/>
    <GuitarsIndex v-bind:guitars="guitars"/>
    
  </main>
</template>

<style></style>