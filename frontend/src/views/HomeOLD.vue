<template>
  <div class="home">
    <!-- <div v-if="error">{{ error }}</div> -->
    <div>
    <!-- <div v-if="posts.length" class="layout"> -->
     <!--  <PostList :posts="posts" /> -->
        <TasksList />
    </div>
    <!-- <div v-else> -->
    <div>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
//import getPosts from '../composables/getPosts'

// component imports
import TasksList from '../components/TasksList2.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { TasksList, Spinner},
  setup() { 
    //const { posts, error, load } = getPosts()

    //load()
    
    //return { posts, error }
  },
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>