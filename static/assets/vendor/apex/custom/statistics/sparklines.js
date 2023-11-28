// Sparkline 1
var options1 = {
	series: [
		{
			name: "Chrome",
			data: [5, 9, 7, 14, 25, 20, 27, 22, 18, 24, 19],
		},
	],
	chart: {
		type: "line",
		width: 90,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
			categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
		},
	},
	stroke: {
		show: true,
		lineCap: "butt",
		colors: ["#20b2f5"],
		width: 3,
		dashArray: 0,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " %";
			},
		},
	},
};
var chart1 = new ApexCharts(document.querySelector("#sparkline1"), options1);
chart1.render();

// Sparkline 2
var options2 = {
	series: [
		{
			name: "Firefox",
			data: [5, 9, 7, 14, 25, 20, 27, 22, 18, 24, 19],
		},
	],
	chart: {
		type: "line",
		width: 90,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
			categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
		},
	},
	stroke: {
		show: true,
		lineCap: "butt",
		colors: ["#e94235"],
		width: 3,
		dashArray: 0,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " %";
			},
		},
	},
};
var chart2 = new ApexCharts(document.querySelector("#sparkline2"), options2);
chart2.render();

// Sparkline 3
var options3 = {
	series: [
		{
			name: "Microsoft Edge",
			data: [5, 9, 7, 14, 25, 20, 27, 22, 18, 24, 19],
		},
	],
	chart: {
		type: "line",
		width: 90,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
			categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
		},
	},
	stroke: {
		show: true,
		lineCap: "butt",
		colors: ["#34a853"],
		width: 3,
		dashArray: 0,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " %";
			},
		},
	},
};
var chart3 = new ApexCharts(document.querySelector("#sparkline3"), options3);
chart3.render();

// Sparkline 4
var options4 = {
	series: [
		{
			name: "Opera",
			data: [5, 9, 7, 14, 25, 20, 27, 22, 18, 24, 19],
		},
	],
	chart: {
		type: "line",
		width: 90,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
			categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
		},
	},
	stroke: {
		show: true,
		lineCap: "butt",
		colors: ["#fabb05"],
		width: 3,
		dashArray: 0,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " %";
			},
		},
	},
};
var chart4 = new ApexCharts(document.querySelector("#sparkline4"), options4);
chart4.render();
