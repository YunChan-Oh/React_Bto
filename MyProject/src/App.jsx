import React from 'react';
import './App.css';
import './fonts.css';
import './reset.css';
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home.jsx";
import BettingSet from './components/betting/set/BettingSet';

const betting = {
  "basketball": {
    "title": {
      "title": "농구",
      "hour": 24,
      "minute": 30
    },
    "teams": {
      "LeftTeam": {
        "name": "1반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      },
      "RightTeam": {
        "name": "2반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      }
    }
  },
  "catchtail": {
    "title": {
      "title": "꼬리잡기",
      "hour": 24,
      "minute": 30
    },
    "teams": {
      "LeftTeam": {
        "name": "1반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      },
      "RightTeam": {
        "name": "2반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      }
    }
  },
  "dodgeball": {
    "title": {
      "title": "피구",
      "hour": 24,
      "minute": 30
    },
    "teams": {
      "LeftTeam": {
        "name": "1반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      },
      "RightTeam": {
        "name": "2반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      }
    }
  },
  "bigvalley": {
    "title": {
      "title": "빅발리볼",
      "hour": 24,
      "minute": 30
    },
    "teams": {
      "LeftTeam": {
        "name": "1반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      },
      "RightTeam": {
        "name": "2반",
        "totalbettingmoney": 300000000000000000,
        "odds": "1:4",
        "personnel": 300,
        "bettingpercent": 75
      }
    }
  }
};

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <div className="BettingSet BettingSet1">
        <BettingSet betting={betting.basketball} />
      </div>
      <div className="BettingSet BettingSet2">
        <BettingSet betting={betting.catchtail} />
      </div>
      <div className="BettingSet BettingSet3">
        <BettingSet betting={betting.dodgeball} />
      </div>
      <div className="BettingSet BettingSet4">
        <BettingSet betting={betting.bigvalley} />
      </div>
    </div>
  );
}

export default App;
