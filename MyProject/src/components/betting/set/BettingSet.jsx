import "./bettingSet.css";
import BettingTitle from "../title/BettingTitle";
import BettingDetail from "./../betting-teams/BettingDetail";

function BettingSet({ betting }) {
  return (
    <div id="BettingSet" className="BettingSet">
      <BettingTitle title={betting.title} />
      <div className="emptyspace"></div>
      <BettingDetail teams={betting.teams} />
    </div>
  );
}

export default BettingSet;
