const app = Vue.createApp({
   data(){
       return{
           course : "Vue Js",
           author: "Nazmul Hossain",
           classes: 10 
       }
   },

   methods:{
       changeTitle(){
            // console.log('you clicked me.');
            this.course = "Laravel";
       }
    }
})

app.mount('#app')

