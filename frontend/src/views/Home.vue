<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <Navbar  />
      </v-col>
    </v-row>
    <div  v-if="authIsReady">
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
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AddNewTask from '../components/AddNewTask.vue'
import TasksList from '../components/TasksList.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',  
  components: {Navbar, AddNewTask,  TasksList},  
  computed: {                    
      ...mapGetters({user:"auth/user", authIsReady:"auth/authIsReady"}),      
  },    
}
</script>

<style>

</style>