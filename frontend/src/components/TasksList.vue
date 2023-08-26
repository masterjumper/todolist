<template>
<v-container fluid>
  <v-row dense>
    <div v-if="tasks.length">
      <v-col cols="12">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" :isCompleted="task.isCompleted" :isEditing="task.isEditing">
        </TaskItem>        
      </v-col>
    </div>
    <div v-else>         
      <!-- <Spinner/>   -->          
    </div>
  </v-row>
</v-container>                
</template>

<script>
import { mapGetters } from "vuex";
import TaskItem from './TaskItem.vue';

export default {
  name: 'TasksList',
  components: {
    TaskItem,
  },
  computed: {                    
      ...mapGetters({tasks:'tasks/tasks'}),            
  },  
  
  methods:{

  },

  mounted(){
      this.$store.dispatch('tasks/getallTasks')
  }
}
</script>

<style>

</style>


