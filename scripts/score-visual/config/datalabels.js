export const dataLabels = {
	backgroundColor: "#fff",
	borderColor: '#fff',
	borderWidth: 0,
	style: {
		fontSize: "2em"
	},
	color: 'black',
	shadow: false,
	crop: true,
	overflow: "none",

	formatter: function () {
		var s;
		s = '<span>' + this.point.y + '</span>';
		s += '<span style="font-size:20px">' + this.point.unit + '</span>'
		return s;
	},
	y: -22
};

export const noDataLabel = { enabled: false };
