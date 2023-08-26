<template>
<div>
    <v-container>
    </v-container>
    <v-simple-table>
      <tbody>       
        <tr v-for="task in tasks" :key="task.id" >            
                <v-container fluid>
                    <v-row justify="center">
                        <v-col cols="12">
                          <v-card                                                            
                              color = "teal-darken-4"
                              theme="dark"                                                            
                          >
                            <v-card-text :style=" task.isCompleted ? 'text-decoration:line-through; color:grey; font-size:18px' : 'font-size:18px'">                              
                              <div v-if="!task.isEditing">
                                {{ task.description }}                                 
                              </div>
                              <div v-else>                 
                                    <v-text-field v-model="task.description"                                      
                                        @blur="doneEdit(task)"
                                        @keyup.enter="doneEdit(task)"                                        
                                        >
                                    </v-text-field>
                              </div>    
                            </v-card-text>
                            <v-list-item>
                              <template v-slot:prepend>                                
                                <v-card-actions>
                                  <div class="justify-self-start">
                                    <v-btn icon>                                       
                                      <v-checkbox 
                                        v-model="task.isCompleted" 
                                        :disabled="task.isEditing" 
                                        @change="completedTask(task.isCompleted, task)" >
                                      </v-checkbox>            
                                    </v-btn>                                         
                                  </div>  
                                </v-card-actions>
                              </template>                                 
                              <template v-slot:append>                                
                                <v-card-actions>
                                  
                                  <div class="justify-self-end">                                    
                                    <v-btn icon 
                                      :disabled="task.isCompleted">                                       
                                      <v-icon class="me-1" icon="mdi-pencil" @click="editTask(task)" ></v-icon>
                                    </v-btn>  
                                    <v-btn icon>
                                      <v-icon class="me-1" icon="mdi-delete" @click="deleteTask(task.id)"></v-icon>
                                    </v-btn>
                                  </div>
                                </v-card-actions>
                              </template>                               
                            </v-list-item>
                          </v-card>                          
                        </v-col>
                    </v-row>
                </v-container>            
        </tr>
      </tbody>
    </v-simple-table>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'TasksList',
  computed: {                    
      ...mapGetters({tasks:'tasks/tasks'}),
  },  
  data() {
    return {
      beforEditCache: '',       
    }
  }, 
  methods:{
    /* getData(){
       this.$store.dispatch("tasks/getData");
    }, */
/*     getTasks() {
      this.$store.dispatch("tasks/getallTasks");
    }, */
    //...mapActions('tasks',['updateTask']),

    editTask(task) {
      this.beforEditCache = task.description
      task.isEditing = true
      this.$store.dispatch("tasks/updateTask",task)      
    },

    doneEdit(task) {      
      if(task.description.trim() == ''){
        task.description = this.beforEditCache
      }
      task.isEditing = false
      this.$store.dispatch("tasks/updateTask",task)
    },

    completedTask(isCompleted, task){
      //task.isCompleted = isCompleted
      this.$store.dispatch("tasks/updateTask",task)
    },

    deleteTask(task_id) {
      console.log(task_id)
      this.$store.dispatch("tasks/deleteTask",task_id)
    }

  }
}
</script>

<style>

</style>


