<template>
  <h1>This is my first Hello world</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Modal :defaultText="props" theme="sale"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

import './assets/global.css'

export default {
  data(){
    return{
      props: "props is registered."
    }
  },
  name: 'App',
  props: ['theme'],
  components: {
    HelloWorld, Modal
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
