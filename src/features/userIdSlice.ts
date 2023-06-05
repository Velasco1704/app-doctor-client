import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateUserIdTypes } from "../interface/initialStates/initialStateUserId.interface";

const initialState: InitialStateUserIdTypes = {
  userId: 0,
};

export const userIdSlice = createSlice({
  name: "userId",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;
export default userIdSlice.reducer;
