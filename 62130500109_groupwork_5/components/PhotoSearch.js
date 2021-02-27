app.component('task-search',{
  props:{
    tasks: {
      type: Array,
      require: true
  }
    },
    template: 
    /*html*/
    `<div>
    <div v-if="searchOpen">
      <div class="flex justify-center text-xl">
      <input v-model="inputSearch" @input="searching"
      class="ml-2 p-1 w-80 h-12 placeholder-gray-500 placeholder-opacity-50 
      focus:outline-none text-black rounded-sm bg-yellow-200"
      type="text" placeholder="Enter Pokemon Name ...">
      <button class="ml-2 p-1 rounded-sm focus:outline-none bg-green-200" 
        v-on:click="switchOpen">Cancel</button>
      </div>
    </div>
    <i class="material-icons text-4xl" v-on:click="switchOpen" v-else>search</i>
  </div>`,
  data(){
    return {
      inputSearch: '',
      searchOpen: false
        }
    },
    methods: {
        switchOpen() {
          this.searchOpen = !this.searchOpen
          if (this.searchOpen == false) {
            this.inputSearch = '';
        }
        this.$emit('searching', this.inputSearch);
        },
        searching() {
        this.$emit('searching', this.inputSearch);
        }
        
    }
})