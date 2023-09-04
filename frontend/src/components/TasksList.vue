<template>
<v-container fluid fill-height>
  <v-row>
    <div v-if="tasks.length">
      <v-col >
        <TaskItem v-for="task in tasks" :key="task.id" :task="task">                    
        </TaskItem>
      </v-col>
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


