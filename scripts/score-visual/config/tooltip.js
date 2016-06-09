import $ from 'jquery';

const tooltip = (props, names) => {
	let container = `#score-visual-${props.card.id}`;
  let { priorName } = names;

	return {
		useHTML: true,
		animation: false,
		borderWidth: 0,
		borderRadius:	40,
		backgroundColor:'white',
		shadow:false,
		style:{
			fontSize: '14px'
	},
		formatter: function () {
      if (this.series.name === priorName) {
        return `<table>
  				<tr><td style="font-size:1.6em; color:${this.point.color}; font-weight: bold; text-align: center">
  				${props.difference}${this.point.unit}
  				</td></tr>
  				<tr><td style="text-align: center"">
  				${this.series.name}
  				</td></tr>
  			</table>`
      } else {
        return `<table>
  				<tr><td style="font-size:1.6em; color:${this.point.color}; font-weight: bold; text-align: center">
  				${this.y}${this.point.unit}
  				</td></tr>
  				<tr><td style="text-align: center"">
  				${this.series.name}
  				</td></tr>
  			</table>`
      }
		},
		positioner: function (labelWidth, labelHeight) {
			return {
				x: ($(container).width() - labelWidth) / 2,
				y: ($(container).height() - labelHeight) / 2 + 35
			};
		}
	}
};

export default tooltip;
