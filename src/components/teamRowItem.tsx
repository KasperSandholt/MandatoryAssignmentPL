import type { TeamStanding } from "../store/apis/footballApi";

interface Props {
  team: TeamStanding;
}

export default function TeamRowItem({ team }: Props) {
  return (
    <tr>
      <td>{team.intRank}</td>
      <td>
        <img src={team.strBadge} alt="" style={{ width: '25px', marginRight: '10px' }} />
        {team.strTeam}
      </td>
      <td className="text-center">{team.intPoints}</td>
      <td className="text-center">{team.intWin}</td>
      <td className="text-center">{team.intDraw}</td>
      <td className="text-center">{team.intLoss}</td>
    </tr>
  );
}