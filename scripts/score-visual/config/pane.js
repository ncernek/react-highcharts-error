import Highcharts from 'highcharts';

const pane = (axisConfig) => {
	return {
		size: '140%',
		center: ['50%', '75%'],
		startAngle: axisConfig.startAngle,
		endAngle: axisConfig.endAngle,
		background :[
			// Track for Your Score
			{
				outerRadius: '100%',
				innerRadius: '76%',
				backgroundColor: Highcharts.Color('#C9CCCE').setOpacity(0.1).get(),
				borderWidth: 0,
				shape: 'arc'
			},
			// Track for Peer Score
			{
				outerRadius: '75%',
				innerRadius: '56%',
				backgroundColor: Highcharts.Color('#C9CCCE').setOpacity(0.1).get(),
				borderWidth: 0,
				shape: 'arc'
			}]
	};
};

export default pane;
