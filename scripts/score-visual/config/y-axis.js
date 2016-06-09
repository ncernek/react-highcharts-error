const yAxis = (axisConfig) => {
	return [{
		reversed: axisConfig.reversed,
		zIndex: 4,
		min: axisConfig.axisMin,
		max: axisConfig.axisMax,
		lineWidth: 0,
		tickLength: 49,
		tickWidth: 0,
		tickColor: 'white',
		tickPosition: 'inside',
		minorTickLength: 0,
		tickPositions: [axisConfig.scoreMin],

		labels: {
			distance: 20,
			enabled: true,
			x: 0,
			y: 0,
			formatter: function() {
				return (
					`${this.value}<span style="font-size: 10px">${axisConfig.units}</span>`
				)
			},
			style: {
				fontSize: 12,
				color: 'grey'
			}
		}
	},
		//---------Inside Goal Tick---------//
		{
			reversed: axisConfig.reversed,
			zIndex: 4,
			min: axisConfig.axisMin,
			max: axisConfig.axisMax,
			lineWidth: 0,
			tickLength: 36,
			tickWidth: 3,
			tickColor: 'grey',
			tickPosition: 'inside',
			minorTickLength: 0,
			tickPositions: [axisConfig.goal],
			labels: {
				distance: 30,
				enabled: true,
				x: 0,
				y: 0,
				formatter: function() {
						return (
							`${this.value}<span style="font-size: 12px"></span><br/>
							<span style="font-size: 10px">goal</span>`
						)
					},
				style: {
					fontSize: 14,
					color: 'grey'
				}
			}
		},
		//---------Outside Goal Tick---------//
		{
			reversed: axisConfig.reversed,
			zIndex: 4,
			min: axisConfig.axisMin,
			max: axisConfig.axisMax,
			lineWidth: 0,
			tickLength: 8,
			tickWidth: 3,
			tickColor: 'grey',
			tickPosition: 'outside',
			minorTickLength: 0,
			tickPositions: [axisConfig.goal],
			labels: {enabled: false}
		}
	]
};

export default yAxis;
