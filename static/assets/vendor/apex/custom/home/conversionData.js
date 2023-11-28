var options = {
	series: [
		{
			name: "Sales",
			data: [2, 3, 3, 5, 7, 9, 4],
		},
		{
			name: "Income",
			data: [-4, -2, -5, -3, -6, -4, -5],
		},
	],
	chart: {
		type: "bar",
		height: 146,
		stacked: true,
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: "40px",
			borderRadius: 2,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 0,
	},
	grid: {
		show: false,
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	yaxis: {
		show: false,
	},
	legend: {
		show: false,
	},
	tooltip: {
		shared: false,
		x: {
			formatter: function (val) {
				return val;
			},
		},
		y: {
			formatter: function (val) {
				return Math.abs(val) + "%";
			},
		},
	},
	xaxis: {
		show: false,
		categories: ["S", "M", "T", "W", "T", "F", "S"],
	},
	colors: ["#0a50d8", "#eaf1ff"],
};

var chart = new ApexCharts(document.querySelector("#conversionData"), options);
chart.render();
