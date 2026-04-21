interface teamType{
    intRank: number;
    strTeam: string;
    intPoints: number;
    intWin: number;
    intDraw: number;
    intLoss: number;
}

interface TeamStanding {
    intRank: number;
    strTeam: string;
    intPoints: number;
    intWin: number;
    intDraw: number;
    intLoss: number;
}

interface LeagueResponse {
  table: TeamStanding[];
}

interface MatchEvent {
    idEvent: string;
    strEvent: string;
    strHomeTeam: string;
    strAwayTeam: string;
    dateEvent: string;
    strTime: string;
    strThumb : string;
}

interface EventsResponse {
    events: MatchEvent[];
}


export type { teamType, TeamStanding, LeagueResponse, MatchEvent, EventsResponse };