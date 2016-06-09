const series = (logic) => {
	let { firstRender, secondRender, thirdRender, axisConfig } = logic;
	return [
		//------------- Rendered firstRender. --------------//
		{
			name: firstRender.name,
			data: [{
				color: firstRender.color,
				radius: '100%',
				innerRadius: '77%',
				y: firstRender.score,
				unit: axisConfig.units
			}],
			dataLabels: firstRender.dataLabel,
			overshoot: 80
		},
		//---------------- Rendered secondRender. --------------------//
		{
			name: secondRender.name,
			data: [{
				color: secondRender.color,
				radius: '100%',
				innerRadius: '77%',
				y: secondRender.score,
				unit: axisConfig.units
			}],
			dataLabels: secondRender.dataLabel,
			overshoot: 80
		},
		//---------------------- PEER SCORE --------------------//
		{
			name: 'peer median',
			data: [{
				color: thirdRender.color,
				radius: '75%',
				innerRadius: '56%',
				y: thirdRender.score,
				unit: axisConfig.units
			}],
			dataLabels: {
				enabled: false
			},
			overshoot: 80
		}
	]
};

export default series;
