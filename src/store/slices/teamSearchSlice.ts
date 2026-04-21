import { createSlice } from "@reduxjs/toolkit";

const teamSearchSlice = createSlice({
    name: 'teamSearch',
    initialState: {
        searchTerm: "",
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setSearchTerm } = teamSearchSlice.actions;
export const teamSearchReducer = teamSearchSlice.reducer;