import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, { dispatch }) => {
    try {
      dispatch(registrationStart());
      const response = await axios.post("/users/register", userData);
      dispatch(registrationSuccess());
      // Handle success if needed
    } catch (error) {
      dispatch(registrationFailure(error.response.data.message));
    }
  }
);