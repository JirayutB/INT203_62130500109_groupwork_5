const app = Vue.createApp({
    data() {
        return {
            title: 'Photo Gallery ',
            tasks: [{
             image: 'images/1.jpg',article: 'Blaziken, Fire/Fighting Pokemon',
                     done: false },
            {image: 'images/2.jpg',article: 'Pidgeot, Normal/Flying Pokemon' ,
                     done: false },
            {image: 'images/3.jpg',article: 'Xerneas, Legendary Fairy Pokemon' ,
                     done: false }
            ],
            searchOpen: false,
            inputSearch: '',
            searchFinding: false,
            showingImage: false,
            currentIndex: 0
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        switchOpen() {
            this.searchOpen = !this.searchOpen
        },
        showImage(index) {
            this.showingImage = true;
            this.currentIndex = index;
        },
        hideImage() {
            this.showingImage = false;
        },
        searching(sc) {
            this.inputSearch = sc;
        }
        
    },
    computed: {
        countImage(){
            return this.tasks.length
        },
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        },
        searchImage() {
            console.log("open")
            this.searchFinding = false;
            if (this.inputSearch == '') {
                console.log("blank");
                return this.tasks
                
            } else {
                console.log("Many")
                search = this.tasks.filter(task => this.inputSearch.toLowerCase().split(' ')
                .every(v => task.article.toLowerCase().includes(v)));
                console.log(search)
                if (search == '') {
                    console.log("King")
                    this.searchFinding = true;
                } else {
                    return search;
                }
            }

        }
    }
})

     