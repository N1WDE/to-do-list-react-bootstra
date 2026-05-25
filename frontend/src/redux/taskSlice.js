import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: []
  },

  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },

    addTaskReducer: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTaskReducer: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
    }
  }
});

export const {
  setTasks,
  addTaskReducer,
  removeTaskReducer
} = taskSlice.actions;

export default taskSlice.reducer;