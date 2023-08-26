<template>
<div>
    <v-container>
        <v-row no-gutters justify="center">
            <v-header>TODO</v-header>
        </v-row>
    </v-container>
    <v-simple-table class="grey lighten-5">
        <template v-slot:default>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                     <td>
                        <v-card                          
                            class="mx-auto"
                            width="400"
                        >
                            <v-card-text>
                                <v-checkbox v-model="task.isCompleted" @change="completeTask(task.isCompleted,task)"></v-checkbox>
                                {{  task.description }}                            
                            </v-card-text>
                        </v-card>
                        <v-divider ></v-divider>
                      </td>  
                   <!--  <td width="1%">
                        
                    </td> -->
                   <!--  <td width="99%"><span
                            :style=" task.isCompleted ? 'text-decoration:line-through' : ''">{{ task.description }}</span>
                    </td> -->
                    <td>
                        <v-btn icon
                            color="grey"
                            @click="removeTask(task.id)">
                            <v-icon>mdi-delete-circle-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
     </template>
    </v-simple-table>
    
</div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'


export default {
  name: 'TasksList',
  components: {  },
  props: ['tasks'],
  /* components: { SinglePost }, */
  setup() {

  },
  data() {
    return {
      tasks: [
        { id: 1, isCompleted: false, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { id: 2, isCompleted: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { id: 3, isCompleted: false, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { id: 4, isCompleted: false, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }, 
}
</script>

<style>

</style>


