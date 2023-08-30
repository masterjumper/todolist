export default {
    namespaced: true,
    state: {
        tasks: {}          
    },
    getters: {        
        tasks:(state) =>state.tasks        
    },

    actions: {
        async getallTasks(context) {
            await axios.get('/api/tasks').then(
                (res)=>{  
                          context.commit('set_allTasks', res);
                        }
            )            
        },

        async updateTask(context, payload) {
            setTimeout(() => {
                context.commit('updateTask', payload)
              }, 100)                            
              await axios.patch('/api/tasks/' + payload.id ,payload)
        },

        async deleteTask(context, payload) {

            setTimeout(() => {
              context.commit('deleteTask', payload)
            }, 100)            
            await axios.delete('/api/tasks/' + payload)
        },

        async addTask(context, payload) {
            context.commit('addTask', payload);
            await axios.post('/api/tasks', payload)
        },
    },

    mutations: {
        set_allTasks(state, payload){                        
            state.tasks = payload.data;
        },

        addTask(state, payload) {            
            state.tasks = [payload, ...state.tasks];
        },

        updateTask(state, payload) {
            const index = state.tasks.findIndex(item => item.id == payload.id)
            state.tasks.splice(index, 1, {
                'id': payload.id,
                'description': payload.description,
                'isCompleted': payload.isCompleted,
                'isEditing': payload.isEditing,
              })            
        },

        deleteTask(state, payload) {
            const index = state.tasks.findIndex(item => item.id == payload)
            state.tasks.splice(index, 1)
        },
    },
}