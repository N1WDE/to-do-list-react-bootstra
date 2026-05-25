import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goals",

  initialState: {
    goals: []
  },

  reducers: {
    setGoals: (state, action) => {
      state.goals = action.payload;
    },

    addGoalReducer: (state, action) => {
      state.goals.push(action.payload);
    },

    removeGoalReducer: (state, action) => {
      state.goals = state.goals.filter(
        (goal) => goal._id !== action.payload
      );
    }
  }
});

export const {
  setGoals,
  addGoalReducer,
  removeGoalReducer
} = goalSlice.actions;

export default goalSlice.reducer;