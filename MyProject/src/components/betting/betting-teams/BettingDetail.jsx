import React from "react";
import "./bettingDetail.css";
import RightTeam from "./RightTeam";
import LeftTeam from "./LeftTeam";

function BettingDetail({ teams }) {
  return (
    <div id={"BettingDetail"}>
      <LeftTeam info={teams.LeftTeam} />
      <div className="line-box">
        <div className="line" />
      </div>
      <RightTeam info={teams.RightTeam} />
    </div>
  );
}

export default BettingDetail;
