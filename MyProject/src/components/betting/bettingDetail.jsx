import React from 'react';
import './bettingDetail.css';
import RightTeam from './betting-teams/RightTeam';
import LeftTeam from './betting-teams/LeftTeam';

function BettingDetail(props){
    return (
        <div id={"BettingDetail"}>
            <LeftTeam info={props.LeftTeam} />
            <div className='line-box'>
                <div className="line"></div>
            </div>
            <RightTeam info={props.RightTeam} />
        </div>
    );
}

export default BettingDetail;