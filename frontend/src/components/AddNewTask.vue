<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-text-field v-model="task_description"
                    label="New Task"
                    append-inner-icon="mdi-plus-circle"
                    @click:append-inner="addTask"
                    @keyup.enter="addTask"
                    style="width: 300px;">
                </v-text-field>
            </v-col>
        </v-row>        
    </v-container>    
</template>

<script>

export default {
    data() {
        return {            
            task_description: '',
        }
    },
    methods: {
        addTask() {
            if (this.task_description.trim().length == 0) {
                return
            }
            this.$store.dispatch('tasks/addTask', {                
                description: this.task_description,
                isCompleted:false,
                idEditing:false

            })
            this.task_description = ''            
        },
    }  
}
</script>

<style>

</style>