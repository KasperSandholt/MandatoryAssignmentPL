import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { useGetLeagueTableQuery } from "../store/apis/footballApi";
import { setTeams } from "../store/slices/teamSlices";
import LeagueTable from "../components/leagueTable";
import TeamSearchBar from "../components/teamSearchBar";
import VenueInfo from "../components/venueInfo";

export default function TablePage() {
  const dispatch = useDispatch();
  
  // 1. Hent data herfra. API-hooken, og gem det i en variabel
  const { data } = useGetLeagueTableQuery(4328);
  const teams = data?.table;

  // 2. Brug useEffect til at opdatere din store, så du undgår infinite loops
  //Via useEffect sender vi de hentede teams til vores Redux store, så de er tilgængelige globalt i appen.
  useEffect(() => {
    if (teams) {
      dispatch(setTeams(teams));
    }
  }, [teams, dispatch]);

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Premier League</h1>
      
      {/* Søgefelt */}
      <TeamSearchBar />
      
      {/* Tabellen */}
      <LeagueTable />

      {/* Stadion Information i bunden */}
      <div className="mt-5 pt-4 border-top">
        <h2 className="text-center mb-4">Stadion Spotlight</h2>
        <VenueInfo />
      </div>
    </Container>
  );
}