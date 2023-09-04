import store from '@/store/modules/tasks';

let payload = { 
  data: [
  { id: 1, descripciont:'Task 1', isCompleted:false}, 
  { id: 2, descripciont:'Task 2', isCompleted:true },
  { id: 3, descripciont:'Task 3', isCompleted:false }
] };

const state = { tasks: [] };

describe('store-mutations: ', () => {
  it('Sets the tasks state with the provided payload', () => {

    store.mutations.set_allTasks(state, payload);

    expect(state.tasks).toEqual(
      [
        { id: 1, descripciont:'Task 1', isCompleted:false}, 
        { id: 2, descripciont:'Task 2', isCompleted:true },
        { id: 3, descripciont:'Task 3', isCompleted:false }
      ]);    
  });

  it('Adds a task to the tasks state', () => {

    const payload = { 
      id: 4, 
      description: 'New Task', 
      isCompleted: false, 
      isEditing: false 
    };  

    store.mutations.addTask(state, payload);  

    expect(state.tasks).toEqual([
      { id: 4, description: 'New Task', isCompleted: false, isEditing: false },
      { id: 1, descripciont:'Task 1', isCompleted:false}, 
      { id: 2, descripciont:'Task 2', isCompleted:true },
      { id: 3, descripciont:'Task 3', isCompleted:false }]);
  });    
  
  it('Updates a task in the tasks state', () => {
    
    const payload = { 
      id: 1, 
      description: 'Updated Task', 
      isCompleted: true, 
      isEditing: false };

    store.mutations.updateTask(state, payload);

    expect(state.tasks).toEqual([
      { id: 4, description: 'New Task', isCompleted: false, isEditing: false },
      { id: 1, description: 'Updated Task', isCompleted: true, isEditing: false },
      { id: 2, descripciont:'Task 2', isCompleted:true },
      { id: 3, descripciont:'Task 3', isCompleted:false }]);
  });      
  
  it('Removes a task from the tasks state', () => {      

    const taskId = 1;
    store.mutations.deleteTask(state, taskId);

    expect(state.tasks).toEqual([
      { id: 4, description: 'New Task', isCompleted: false, isEditing: false },
      { id: 2, descripciont:'Task 2', isCompleted:true },
      { id: 3, descripciont:'Task 3', isCompleted:false },      
    ]);
  });
});