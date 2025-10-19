import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks:[{
    title:"vish"
  }] ,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    toggleTaskDone: (state, action) => {
  const task = state.tasks.find(t => t.id === action.payload);
  if (task) task.done = !task.done;
},
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { toggleTaskDone,addTask,removeTask } = scheduleSlice.actions;
export default scheduleSlice.reducer;
