import { useGetLeagueTableQuery } from "../store/apis/footballApi"




  const leagueTableData = [
    {
      "idStanding": "9350886",
      "intRank": "1",
      "idTeam": "133604",
      "strTeam": "Arsenal",
      "strBadge": "https://r2.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png/tiny",
      "idLeague": "4328",
      "strLeague": "English Premier League",
      "strSeason": "2025-2026",
      "strForm": "LWWWW",
      "strDescription": "Promotion - Champions League (League phase)",
      "intPlayed": "32",
      "intWin": "21",
      "intLoss": "4",
      "intDraw": "7",
      "intGoalsFor": "62",
      "intGoalsAgainst": "24",
      "intGoalDifference": "38",
      "intPoints": "70",
      "dateUpdated": "2026-04-15 23:01:57"
    },
    {
      "idStanding": "9350887",
      "intRank": "2",
      "idTeam": "133613",
      "strTeam": "Manchester City",
      "strBadge": "https://r2.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png/tiny",
      "idLeague": "4328",
      "strLeague": "English Premier League",
      "strSeason": "2025-2026",
      "strForm": "WDDWW",
      "strDescription": "Promotion - Champions League (League phase)",
      "intPlayed": "31",
      "intWin": "19",
      "intLoss": "5",
      "intDraw": "7",
      "intGoalsFor": "63",
      "intGoalsAgainst": "28",
      "intGoalDifference": "35",
      "intPoints": "64",
      "dateUpdated": "2026-04-15 23:01:57"
    },
    {
      "idStanding": "9350888",
      "intRank": "3",
      "idTeam": "133612",
      "strTeam": "Manchester United",
      "strBadge": "https://r2.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png/tiny",
      "idLeague": "4328",
      "strLeague": "English Premier League",
      "strSeason": "2025-2026",
      "strForm": "LDWLW",
      "strDescription": "Promotion - Champions League (League phase)",
      "intPlayed": "32",
      "intWin": "15",
      "intLoss": "7",
      "intDraw": "10",
      "intGoalsFor": "57",
      "intGoalsAgainst": "45",
      "intGoalDifference": "12",
      "intPoints": "55",
      "dateUpdated": "2026-04-15 23:01:57"
    },
    {
      "idStanding": "9350889",
      "intRank": "4",
      "idTeam": "133601",
      "strTeam": "Aston Villa",
      "strBadge": "https://r2.thesportsdb.com/images/media/team/badge/jykrpv1717309891.png/tiny",
      "idLeague": "4328",
      "strLeague": "English Premier League",
      "strSeason": "2025-2026",
      "strForm": "DWLLL",
      "strDescription": "Promotion - Champions League (League phase)",
      "intPlayed": "32",
      "intWin": "16",
      "intLoss": "9",
      "intDraw": "7",
      "intGoalsFor": "43",
      "intGoalsAgainst": "38",
      "intGoalDifference": "5",
      "intPoints": "55",
      "dateUpdated": "2026-04-15 23:01:57"
    },
    {
      "idStanding": "9350890",
      "intRank": "5",
      "idTeam": "133602",
      "strTeam": "Liverpool",
      "strBadge": "https://r2.thesportsdb.com/images/media/team/badge/kfaher1737969724.png/tiny",
      "idLeague": "4328",
      "strLeague": "English Premier League",
      "strSeason": "2025-2026",
      "strForm": "WLDLW",
      "strDescription": "Promotion - Champions League (League phase)",
      "intPlayed": "32",
      "intWin": "15",
      "intLoss": "10",
      "intDraw": "7",
      "intGoalsFor": "52",
      "intGoalsAgainst": "42",
      "intGoalDifference": "10",
      "intPoints": "52",
      "dateUpdated": "2026-04-15 23:01:57"
    }

  ]


  export default function LeagueTable() {
 

    const { data, error, isFetching } = useGetLeagueTableQuery(4328)

if (isFetching) return <p>Loading...</p>
if (error) return <p>Error fetching league table data</p>
if (!data || !data.table) return <p>No league table data available</p>


    return (
      <div>
        {data.table.map((team) => (
          <div key={team.idTeam}>
            <h2>{team.strTeam}</h2>
            <p>Rank: {team.intRank}</p>
            <p>Points: {team.intPoints}</p>
            <p>Wins: {team.intWin}</p>
            <p>Losses: {team.intLoss}</p>
            <p>Draws: {team.intDraw}</p>
            <p>Goals For: {team.intGoalsFor}</p>
            <p>Goals Against: {team.intGoalsAgainst}</p>
            <p>Goal Difference: {team.intGoalDifference}</p>
          </div>
        ))}
      </div>
    )

  }