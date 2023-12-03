const app = Vue.createApp({
    data() {
        return {
        
            cardArray: [
                {
                    "Title": " Borderline",
                    "Desc" : " Tame Impala",
                    "image": "https://wsuguardian.com/wp-content/uploads/2020/02/tame-impala-the-slow-rush-2-1280%C3%971024.jpg"
                },
                {
                    "Title": "Day Dream",
                    "Desc" : "I hate models",
                    "image": "https://i1.sndcdn.com/artworks-000173807479-7hpbio-t500x500.jpg"
                },
                {
                    "Title": "Diabolus",
                    "Desc" : "SCOVE",
                    "image": "https://i.scdn.co/image/ab67616d0000b273c8defbf15911cea725f0d899"
                }
            ],
            //Here we fix a current index to follow which music is currently display
            currentObject: {},
            currentIndex: 0
        };
    },
    mounted() {
        // calling the method for initialisation
        this.displayMusic();
    },
    methods: {
        // Method to display the card
        displayMusic() {
            this.currentObject = this.cardArray[this.currentIndex];
        },
        // method for next card
        nextOne() {
            this.currentIndex = (this.currentIndex + 1) % this.cardArray.length;
            this.displayMusic();
        },
        // method for previus card
        prevOne() {
            this.currentIndex = (this.currentIndex - 1 + this.cardArray.length) % this.cardArray.length;
            this.displayMusic();
        }
    }
})

app.mount('#app')