app.component('task-item',{
    props:{
        tasks: {
            type: Array,
            require: true
        },
    'search-image': Array,
    'search-finding': Boolean,
    },
    template: 
    /*html*/
    `<div>
    <section class="overflow-hidden text-gray-700 body-font ">
    <div class="container px-5 py-2 mx-auto lg:pt-2 lg:px-32 text-3xl ">
        <div v-for="(task,index) in searchImage" class="flex">
          <img :src="task.image" class="h-80 w-48 pb-16" v-on:dblclick="toggleDone(index)"
          v-on:click="showImage(index)">
          <div class="my-auto pl-8">{{task.article}}</div>
          <i class="material-icons text-red-400 my-auto"  v-show="task.done">
            favorite
          </i>
        </div>
      </div>
    </section>
    <p v-if="searchFinding" class="text-center mt-4 text-7xl">No photo.</p>
    </div>`,
    data(){
    return {
      showingImage: false,
      currentIndex: 0
        }
    },
    methods: {
      toggleDone(index){
          this.tasks[index].done = !this.tasks[index].done
      },
      showImage(index) {
        this.currentIndex = index
        this.showingImage = true
        this.$emit('showing-image', this.showingImage)
        this.$emit('show-image', this.currentIndex)
      }


    }
})
