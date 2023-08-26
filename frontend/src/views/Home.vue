<template>
  <v-container fluid fill-height>
    <Navbar  />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <AddNewTask /> 
      </v-col>
    </v-row>
        <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <TasksList align-center/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddNewTask from '../components/AddNewTask.vue'
import TasksList from '../components/TasksList.vue'
import Spinner from '../components/Spinner.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',  
  components: {Navbar, AddNewTask,  TasksList, Spinner},  
}
</script>

<style>

</style>