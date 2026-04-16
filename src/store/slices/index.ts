import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "../apis/footballApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    // Add your reducers here
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
    
});

setupListeners(store.dispatch);

export default store;

export  { store };