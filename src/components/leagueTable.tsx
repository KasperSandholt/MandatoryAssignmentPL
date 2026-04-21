import { useSelector } from "react-redux";
import { useGetLeagueTableQuery } from "../store/apis/footballApi";
import { Container, Table } from 'react-bootstrap'; 
import TeamRow from "./teamRowItem";

export default function LeagueTable() {
  // 1. Alle hooks kaldes her i toppen
  const { data, error, isFetching } = useGetLeagueTableQuery(4328);
  
  // Vi henter searchTerm fra Redux state
  const searchTerm = useSelector((state: any) => state.teamSearch.searchTerm);

  // 2. Vi håndterer loading og error med det samme
  if (isFetching) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-danger text-center mt-5">Error fetching league table data</p>;
  if (!data || !data.table) return <p className="text-center mt-5">No league table data available</p>;

  // 3. Nu hvor vi VED at data.table findes, kan vi filtrere sikkert
  // Vi filtrerer holdene baseret på searchTerm, og sørger for at det er case-insensitive
  const filteredTeams = data.table.filter((team) => 
    team.strTeam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4 shadow-sm p-4 bg-white rounded">
      <h2 className="mb-4 text-center">Premier League Stilling</h2>
      
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Rank</th>
            <th>Hold</th>
            <th className="text-center">Point</th>
            <th className="text-center">V</th>
            <th className="text-center">U</th>
            <th className="text-center">T</th>
          </tr>
        </thead>
        <tbody>
          {/* Vi bruger de filtrerede hold her */}
          {filteredTeams.map((team) => (
           <TeamRow key={team.idTeam} team={team} />
          ))}
        </tbody>
      </Table>
      
      {filteredTeams.length === 0 && (
        <p className="text-center text-muted">Ingen hold matchede din søgning.</p>
        
      )}
      
    </Container>
  );
}