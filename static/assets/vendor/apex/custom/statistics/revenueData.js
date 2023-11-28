var options = {
	chart: {
		height: 203,
		type: "bar",
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: "40px",
			borderRadius: 7,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ["#4285f4", "#fabb05", "#4285f4"],
	},
	series: [
		{
			name: "New",
			data: [2000, 5500, 4900, 6000, 2000, 6000, 2000],
		},
		{
			name: "Returning",
			data: [2500, 3500, 6500, 3500, 4500, 3000, 8500],
		},
	],
	legend: {
		show: false,
	},
	xaxis: {
		categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	},
	yaxis: {
		show: false,
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val + " thousands";
			},
		},
	},
	grid: {
		borderColor: "rgba(255, 255, 255, .30)",
		strokeDashArray: 3,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	colors: ["transparent", "transparent", "transparent"],
};
var chart = new ApexCharts(document.querySelector("#revenueData"), options);
chart.render();
