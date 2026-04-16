import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thesportsdb.com/api/v1/json/123/' }),
    endpoints: (builder) => ({
        getLeagueTable: builder.query({
            query: (leagueId) => `lookuptable.php?l=${leagueId}`
        }),
    }),
})

export const {
    useGetLeagueTableQuery,
} = footballApi

export { footballApi }
