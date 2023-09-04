<template>
  <v-card                                                            
      color = "teal-darken-4"
      theme = "dark"
      style="margin-bottom:20px; width: 300px;"
  >
    <v-card-text :style=" isCompleted ? 'text-decoration:line-through; color:grey; font-size:18px' : 'font-size:18px'">                              
      <div v-if="!isEditing">
        {{ description }}                                 
      </div>
      <div v-else>                 
        <v-text-field v-model="description"                                      
            @blur="doneEdit"
            @keyup.enter="doneEdit"                                        
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
                v-model="isCompleted"
                :model-value="isCompleted ? true:false"
                :disabled="isEditing ? true:false" 
                @change="completedTask"
                color="success">
              </v-checkbox>            
            </v-btn>                                         
          </div>  
        </v-card-actions>
      </template>                                 
      <template v-slot:append>                                
        <v-card-actions>                    
          <div class="justify-self-end">
            <v-btn icon 
              :disabled="isCompleted ? true:false">                                       
              <v-icon class="me-1" icon="mdi-pencil" @click="editTask" ></v-icon>
            </v-btn>  
            <v-btn icon>
              <v-icon class="me-1" icon="mdi-delete" @click="deleteTask(id)"></v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </template>                               
    </v-list-item>
  </v-card>                          
                  
</template>

<script>

export default {
  name: 'TaskItem',
  props:{
    task:{
      type: Object,
      required: true,
    },   
  },

  data() {
    return {
      'id': this.task.id,
      'description': this.task.description,
      'isCompleted': this.task.isCompleted,
      'isEditing': this.task.isEditing,
      'beforeEditCache': '',     
    }
    
  }, 
  
  methods:{

    editTask() {
      this.beforEditCache = this.description
      this.isEditing = true      
    },

    doneEdit() {      
      if( this.description.trim() == ''){
         this.description = this.beforEditCache
      }
      this.task.description = this.description
      this.isEditing = false
      this.$store.dispatch("tasks/updateTask", this.task)
    },

    completedTask(){  
      this.task.isCompleted = this.isCompleted              
      this.$store.dispatch("tasks/updateTask", this.task)
    },

    deleteTask(task_id) {      
      this.$store.dispatch("tasks/deleteTask", task_id)
    },
  },

}
</script>

<style>

</style>