import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teams: [],
    },
    reducers: {
        setTeams: (state, action) => {
            state.teams = action.payload;
        },
        searchTeam: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.teams = state.teams.filter(team => team.strTeam.toLowerCase().includes(searchTerm));
        }
    },
});

export const { setTeams, searchTeam } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;
