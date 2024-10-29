<script>

export default { 
  data: function () { 
    return { 
      newGuitarParams: {},
    };
  },
  methods: { 
    handleSubmit: function () { 
      this.$emit('createGuitar', this.newGuitarParams);
      this.newGuitarParams = {};
    },
  },
};

</script>

<template>
  <div>
    <h1>New Guitar</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        name: <input type="text" v-model="newGuitarParams.name" />
      </div>
      <div>
        Price: <input type="text" v-model="newGuitarParams.price"/>
      </div>
      <div>
        Year: <input type="text" v-model="newGuitarParams.year" />
      </div>
      <div>
        Image_URL: <input type="text" v-model="newGuitarParams.image"/>
      </div>
      <button type='submit'>Create</button>
    </form>
  </div>
</template>