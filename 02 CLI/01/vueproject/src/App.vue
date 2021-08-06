<template>
  <h1>This is my first Hello world</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div v-if="showModal">
    <Modal :defaultText="props" theme="sale"/>
  </div>  

  <!-- Modal Open -->
  <h2>Modal</h2>
  <button @click="toggleModal">Open</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

import './assets/global.css'

export default {
  data(){
    return{
      props: "props is registered.",
      showModal: false
    }
  },
  name: 'App',
  props: ['theme'],
  components: {
    HelloWorld, Modal
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
