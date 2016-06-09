import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

// bug fix on solid-gauge
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

import logic from './config/logic';
import chart from './config/chart';
import plotOptions from './config/plotOptions';
import pane from './config/pane';
import tooltip from './config/tooltip';
import yAxis from './config/y-axis';
import series from './config/series';
import names from './config/names';

const options = (props) => {
	return {
		credits: {enabled: false},
		chart: chart(),
		plotOptions: plotOptions(),
		title: null,
		pane:	pane(logic(props, names).axisConfig),
		tooltip: tooltip(props, names),
		yAxis: yAxis(logic(props, names).axisConfig),
		series: series(logic(props, names))
	};
};

export default options;
