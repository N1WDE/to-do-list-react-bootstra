import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Ir al gimnasio",
      date: "2026-04-28"
    },
    {
      id: 2,
      title: "Estudiar Redux Toolkit",
      date: "2026-04-30"
    }
  ]
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    }
  }
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;