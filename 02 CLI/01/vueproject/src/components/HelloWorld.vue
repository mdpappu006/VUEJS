<template>
  <div class="hello">
      <h2>{{title}}</h2>
      <input type="text" ref="name">
      <button @click="handleclick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    defaultText: String,
  },
  data(){
    return{
      title: "hello from script."
    }
  },
  methods:{
    handleclick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
