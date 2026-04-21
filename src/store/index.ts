import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "./apis/footballApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { setSearchTerm, teamSearchReducer} from "./slices/teamSearchSlice";
import { teamReducer } from "./slices/teamSlices";


const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    teamSearch: teamSearchReducer, 
    team: teamReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
    
});

setupListeners(store.dispatch);

export default store;

export  { store, setSearchTerm };