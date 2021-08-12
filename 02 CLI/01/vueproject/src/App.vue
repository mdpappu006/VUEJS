<template>
  <h1>This is my first Hello world</h1>

  <teleport to=".telModal" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
        <h1> Learning VUEJS Course </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam recusandae veniam doloremque.</p>
        <template v-slot:links>
          <a href="https://google.com"> Current URL</a>
        </template>
    </Modal>
  </teleport>  

  <!-- Modal Open -->
  <h2>Modal</h2>
  <button @click="toggleModal">Open</button>
</template>

<script>
import Modal from './components/Modal.vue'

import './assets/global.css'

export default {
  data(){
    return{
      showModal: false
    }
  },
  name: 'App',
  props: ['theme'],
  components: {
    Modal
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
