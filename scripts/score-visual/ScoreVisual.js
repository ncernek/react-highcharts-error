import React, { Component, PropTypes } from 'react'; //TODO put PropTypes back
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import options from './score-visual-options';
// import styles from './style.scss';

// fix highcharts solid gauge bug
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

export default class ScoreVisual extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// extend Highcharts with modules`
		if (this.props.modules) {
			this.props.modules.forEach(module => {
				module(Highcharts);
			})
		}
		// set a container which the chart should render to.
		this.chart = new Highcharts[this.props.type || 'Chart'](
			`score-visual-${this.props.card.id}`,
      options(this.props)
		);
	}
	// destroy the chart before unmount. clean it up
	componentWillUnmount() {
		this.chart.destroy();
	}

	// create the div which the chart will be rendered to.
	render(){
		return (
      <div id={`score-visual-${this.props.card.id}`}
         />
    )
	}
}

ScoreVisual.propTypes = {
	modules: PropTypes.array,
	type: PropTypes.string,
	card: PropTypes.object.isRequired,
  currentScore: PropTypes.number.isRequired,
  priorScore: PropTypes.number.isRequired,
  peerScore: PropTypes.number.isRequired
};
