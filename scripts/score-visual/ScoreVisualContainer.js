import ScoreVisual from './ScoreVisual';
import React from 'react';

// fake state
const cardsData = {
  '1': {
    id: 1,
    minimum: 0,
    goal: 30,
    direction: 'ascending',
    units: 'drugs'
  },
  '2': {
    id: 2,
    minimum: 0,
    goal: 100,
    direction: 'ascending',
    units: 'peer reviews'
  },
  '3': {
    id: 3,
    minimum: 10,
    goal: 2.9,
    direction: 'descending',
    units: 'discrepant reads'
  }
}

const scores = {
  '1': { currentScore: 19, priorScore: 14},
  '2': { currentScore: 34, priorScore: 37},
  '3': { currentScore: 4, priorScore: 4.1}
}

const clientScoreStat = {
  '1': { medianScore: 13 },
  '2': { medianScore: 45 },
  '3': { medianScore: 5 }
  };

// Map the redux store state representing all cards to props
const mapStateToProps = (state=[], ownProps={id: 1}) => {
  return {
    state: state,
    card: cardsData[ownProps.id],
    currentScore: scores[ownProps.id].currentScore,
    priorScore: scores[ownProps.id].priorScore,
    peerScore: clientScoreStat[ownProps.id].medianScore,
    difference: scores[ownProps.id].currentScore - scores[ownProps.id].priorScore
  }
};

const ScoreVisualContainer = (props) => {
  return (<div>
    <ScoreVisual {...mapStateToProps()} />
    </div>)
};


//connect(mapStateToProps)(ScoreVisual);



export default ScoreVisualContainer;
