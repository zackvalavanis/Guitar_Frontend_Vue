<script>
export default { 
  props: { 
    guitar: Object,
  },
  data: function () { 
    return { 
      editGuitarParams: {},
    };
  },
  created: function () {
    this.editGuitarParams = { ...this.guitar };
  },
  methods: { 
    handleSubmit: function () { 
      this.$emit("updateGuitar", this.guitar.id, this.editGuitarParams)
    },
  },
};
</script>

<template>
  <div>
    <h1>Guitar Info</h1>
    <p>Name: {{ guitar.name }}</p>
    <p>Year: {{ guitar.year }}</p>
    <p>Price: {{ guitar.price }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Name: <input type="text" v-model="editGuitarParams.name"/>
      </div>
      <div>
        Year: <input type="text" v-model="editGuitarParams.year" />
      </div>
      <div>
        Price: <input type="text" v-model="editGuitarParams.price" />
      </div>
      <div>
        Image_URL: <input type="tect" v-model="editGuitarParams.image" />
      </div>
      <button type="submit">Update Guitar</button>
      <button v-on:click="$emit('destroyGuitar', guitar)">Delete Guitar</button>
    </form>
  </div>
</template>

<style></style>