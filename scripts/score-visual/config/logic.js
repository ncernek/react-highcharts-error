import {red, green, blue, darkBlue, grey } from './color';
import { dataLabels, noDataLabel } from './dataLabels';

const logic = (props, names) => {


	// pull score params from redux
	let	{ direction, minimum, goal, units } = props.card;
  let { currentScore, priorScore, peerScore } = props;
  let { priorName, currentName, peerName } = names;

	let axisConfig = {goal, units};
	let firstRender = {};
	let secondRender = {};
	let thirdRender = {};

// ------ ASCENDING ------- //
	if (direction === 'ascending') {
		// set the orientation of the axis
		axisConfig.axisMin = minimum;
		axisConfig.axisMax = goal;
		axisConfig.reversed = false;
		axisConfig.startAngle = -90;
		axisConfig.endAngle = 90;

		// set the scores for each ring
		firstRender.score = Math.max(currentScore, priorScore);
		secondRender.score = Math.min(currentScore, priorScore);
		thirdRender.score = peerScore;

		// if score is trending worse
		if (currentScore - priorScore < 0) {
			firstRender.color = red;
			secondRender.color = darkBlue;
			thirdRender.color = grey;
			firstRender.name = priorName;
			secondRender.name = currentName;
      thirdRender.name = peerName;
			firstRender.dataLabel = noDataLabel;
			secondRender.dataLabel = dataLabels;
		}
		// if score is trending better
		else {
			firstRender.color = green;
			secondRender.color = blue;
			thirdRender.color = grey;
			firstRender.name = priorName;
			secondRender.name = currentName;
			firstRender.dataLabel = dataLabels;
			secondRender.dataLabel = noDataLabel;
		}
	}


// ------ DESCENDING ------ //
	if (direction === 'descending') {
		// set the orientation of the axis
		axisConfig.axisMin = goal;
		axisConfig.axisMax = minimum;
		axisConfig.reversed = true;
		axisConfig.startAngle = 90;
		axisConfig.endAngle = -90;

		// set the scores for each ring
		firstRender.score = Math.min(currentScore, priorScore);
		secondRender.score = Math.max(currentScore, priorScore);
		thirdRender.score = peerScore;

		// if score is trending better
		if (currentScore - priorScore < 0) {
			firstRender.color = green;
			secondRender.color = blue;
			thirdRender.color = grey;
			firstRender.name = priorName;
			secondRender.name = currentName;
			firstRender.dataLabel = dataLabels;
			secondRender.dataLabel = noDataLabel;
		}

		// if score is trending worse
		else {
			firstRender.color = red;
			secondRender.color = darkBlue;
			thirdRender.color = grey;
			firstRender.name =
			secondRender.name = currentName; priorName;
			firstRender.dataLabel = noDataLabel;
			secondRender.dataLabel = dataLabels;
		}
	}

	return {firstRender: firstRender,
					secondRender: secondRender,
					thirdRender: thirdRender,
					axisConfig: axisConfig};
};

export default logic;
