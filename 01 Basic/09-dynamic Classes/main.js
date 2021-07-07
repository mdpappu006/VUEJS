const app = Vue.createApp({
    data(){
        return{
            books : [
                { 
                    bookImg : 'img/java.jpg',
                    bookTitle: 'Learn Java Programming',
                    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
                    altText : 'Java Programming',
                    favBook: true
                },
                { 
                    bookImg : 'img/php.jpg',
                    bookTitle: 'Learn PHP Programming',
                    description: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group. ',
                    altText : ' PHP Programming',
                    favBook: true
                },
                { 
                    bookImg : 'img/python.jpg',
                    bookTitle: 'Learn Python Programming',
                    description: "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. ",
                    altText : ' Python Programming',
                    favBook: false
                }
            ]
        }
    }
})

app.mount("#app")