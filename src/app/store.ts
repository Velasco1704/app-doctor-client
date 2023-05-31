import { configureStore } from "@reduxjs/toolkit";
import { doctorsApi } from "../api/apiSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/userSlice";

const persistorConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

export const store = configureStore({
  reducer: {
    [doctorsApi.reducerPath]: doctorsApi.reducer,
    user: persistReducer<ReturnType<typeof userReducer>>(
      persistorConfig,
      userReducer
    ),
  },
  middleware: (getDefaultSettings) =>
    getDefaultSettings({
      serializableCheck: false,
    }).concat(doctorsApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
