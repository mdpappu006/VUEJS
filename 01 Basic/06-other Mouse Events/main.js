const app = Vue.createApp({
   data(){
       return{
           course : "Vue Js",
           author: "Nazmul Hossain",
           classes: 10,
           showCourse: true,
           x: 0,
           y: 0
       }
   },

   methods:{
       changeTitle(){
            // console.log('you clicked me.');
            this.course = "Laravel";
            this.showCourse = !this.showCourse;
       },
       handleEvent(e){
           console.log(e, e.type);
       },
       mouseMove(e){
        //    console.log(e);
           this.x = e.offsetX;
           this.y= e.offsetY;
       }
    }
})

app.mount('#app')

