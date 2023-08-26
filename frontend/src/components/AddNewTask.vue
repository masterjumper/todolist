<template>
    <v-text-field v-model="task_description"
        label="New Task"
        append-inner-icon="mdi-plus-circle"
        @click:append="addTask"
        @keyup.enter="addTask"
        style="margin-bottom:20px; width: 300px;">
    </v-text-field>
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