
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // your initial state here
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationStart: (state) => {
      // handle start action
    },
    registrationSuccess: (state) => {
      // handle success action
    },
    registrationFailure: (state, action) => {
      // handle failure action
      state.error = action.payload;
    },
    // Add your registerUser action here
    registerUser: (state, action) => {
      // handle registerUser action
    },
  },
});

export const {
  registrationStart,
  registrationSuccess,
  registrationFailure,
  registerUser, // Make sure to export registerUser
} = registrationSlice.actions;

export default registrationSlice.reducer;