const app = Vue.createApp({
   data(){
       return{
           course : "Vue Js",
           author: "Nazmul Hossain",
           classes: 10,
           showCourse: true,
       }
   },

   methods:{
       changeTitle(){
            // console.log('you clicked me.');
            this.course = "Laravel";
            this.showCourse = !this.showCourse;
       }
    }
})

app.mount('#app')

