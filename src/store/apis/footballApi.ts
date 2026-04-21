import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { EventsResponse } from '../../types/teams';


export interface TeamStanding {
  idTeam: string;
  strTeam: string;
  strBadge: string;
  intRank: string;
  intPoints: string;
  intWin: string;
  intDraw: string;
  intLoss: string;
}

export interface LeagueResponse {
  table: TeamStanding[];
}

export interface VenueResponse {
  venues: {
    idVenue: string;
    strVenue: string;
    strLocation: string;
    intCapacity: string;
    strDescriptionEN: string;
    strThumb: string;
    strWebsite: string;
  }[];
}




export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thesportsdb.com/api/v1/json/123/' }),
  endpoints: (builder) => ({
    // 3. Tilføj typerne til queryen: <ReturType, InputType>
    getLeagueTable: builder.query<LeagueResponse, number | string>({
      query: (leagueId) => `lookuptable.php?l=${leagueId}`
    }),

    getNextEvents: builder.query<EventsResponse, number | string>({
        query: (leagueId) => `eventspastleague.php?id=${leagueId}`
    }),
    getVenue: builder.query<VenueResponse, string>({
        query: (venueId) => `lookupteam.php?id=${venueId}`
}),
  })
})

export const {
  useGetLeagueTableQuery,
  useGetNextEventsQuery,
  useGetVenueQuery,
} = footballApi;