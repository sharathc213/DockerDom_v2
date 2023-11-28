var options = {
	series: [
		{
			name: "Projects",
			type: "column",
			data: [25, 12, 20, 85, 12, 25, 19, 23, 18, 15, 22, 28],
		},
		{
			name: "Status",
			type: "area",
			data: [44, 55, 50, 40, 30, 10, 12, 22, 15, 19, 20, 17],
		},
	],
	chart: {
		height: 250,
		type: "line",
		toolbar: {
			show: false,
		},
	},
	stroke: {
		width: [1, 1, 1],
		curve: "smooth",
		colors: ["#0a50d8"],
	},
	plotOptions: {
		bar: {
			columnWidth: "70%",
			borderRadius: 15,
			distributed: true,
			dataLabels: {
				position: "top",
			},
		},
	},

	fill: {
		opacity: [0.85, 0.25, 1],
		gradient: {
			inverseColors: false,
			shade: "light",
			type: "vertical",
			opacityFrom: 0.85,
			opacityTo: 0.55,
			stops: [0, 100, 100, 100],
		},
	},

	markers: {
		size: 0,
	},
	xaxis: {
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		axisBorder: {
			show: false,
		},
		tooltip: {
			enabled: true,
		},
		labels: {
			show: true,
			rotate: -45,
			rotateAlways: true,
		},
	},
	yaxis: {
		show: false,
	},
	legend: {
		show: false,
	},
	grid: {
		borderColor: "rgba(255, 255, 255, .30)",
		strokeDashArray: 5,
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
			bottom: -20,
			left: 10,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val;
			},
		},
	},
	colors: ["#dfe7f7"],
};

var chart = new ApexCharts(document.querySelector("#projectsGraph"), options);
chart.render();
