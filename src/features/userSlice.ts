import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateTypes } from "../interface/initialState.interface";
import { SessionDataTypes } from "../interface/sessionData.interface";

const initialState: InitialStateTypes = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLocalStorage: (state, action: PayloadAction<SessionDataTypes>) => {
      state.user = action.payload;
    },
    clearLocalStorage: (state) => {
      state.user = null;
    },
  },
});

export const { setLocalStorage, clearLocalStorage } = userSlice.actions;
export default userSlice.reducer;
