import { createSlice } from '@reduxjs/toolkit';

type TutorState = {
  list: string[];
};

const initialState: TutorState = {
  list: []
};

const slice = createSlice({
  name: 'tutor',
  initialState,
  reducers: {
    addTutor: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { addTutor } = slice.actions;
