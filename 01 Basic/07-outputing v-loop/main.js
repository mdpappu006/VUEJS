const app = Vue.createApp({
    data(){
        return{
            courses : [
                {
                    name : ' VueJS',
                    duration: '8 months',
                    instructor: 'Nazmul Hossain'
                },
                
                {
                    name : ' Full-stack Development',
                    duration: '24 months',
                    instructor: 'Nazmul Hossain'
                },

                {
                    name : ' front-end Development',
                    duration: '12 months',
                    instructor: 'Nazmul Hossain'
                },

                {
                    name : ' PHP Laravel',
                    duration: '15 months',
                    instructor: 'Nazmul Hossain'
                }
            ],

            google: "https://google.com",
        }
    },
})

app.mount("#app")