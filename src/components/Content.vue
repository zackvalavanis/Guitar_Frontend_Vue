<script>
import GuitarsIndex from "./GuitarsIndex.vue"
import axios from 'axios'
import GuitarsNew from './GuitarsNew.vue'
import Modal from './Modal.vue'
import GuitarsShow from './GuitarsShow.vue'

export default { 
  components: { 
    GuitarsIndex,
    GuitarsNew,
    Modal,
    GuitarsShow,
  },

  data: function () { 
    return { 
      guitars: [],
      currentGuitar: {}, 
      isCurrentGuitarVisible: false,
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

    handleShowGuitar: function (guitar) { 
      console.log('handleShowGuitar', guitar);
      this.currentGuitar=guitar;
      this.isCurrentGuitarVisible=true;
    }, 
    handleClose: function () { 
      this.isCurrentGuitarVisible = false
    },
    handelUpdateGuitar: function (id, params) { 
      console.log('handleUpdateGuitar', id, params);
      axios
        .patch(`http://localhost:3000/guitars/${id}.json`, params).then((response) => { 
          console.log("guitars update", response);
          this.guiitars = this.guitars.map((guitar) => { 
            if (guitar.id === response.data.id){ 
              return response.data;
            } else { 
              return guitar;
            }
          });
          this.handleClose;
        })
        .catch((error) => { 
          console.log("guitar update error", error.response);
        });
    },
    handleDestroyGuitar: function (guitar) { 
      axios.delete(`http://localhost:3000/guitars/${guitar.id}.json`).then((response) => { 
        console.log("guitar Destroy", response);
        var index = this.guitars.indexOf(guitar);
        this.guitar.splice(index, 1);
        this.handleClose();
      });
    },
  },
};

</script>

<template>
  <main>
    <h1>Welcome to Vue!</h1>
    <GuitarsNew v-on:createGuitar="handleCreateGuitar"/>
    <GuitarsIndex v-bind:guitars="guitars" v-on:showGuitar="handleShowGuitar"/>
    <Modal v-bind:show="isCurrentGuitarVisible" v-on:close="handleClose">
      <GuitarsShow v-bind:guitar="currentGuitar" v-on:updateGuitar="handelUpdateGuitar" v-on:destroyGuitar="handleDestroyGuitar"/>
    </Modal>
  </main>
</template>

<style></style>