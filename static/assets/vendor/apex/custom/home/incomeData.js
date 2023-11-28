var options = {
	chart: {
		height: 350,
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "straight",
		width: 2,
	},
	series: [
		{
			name: "Overall Sales",
			type: "line",
			data: [
				10000, 70000, 65000, 30000, 35000, 25000, 18000, 20000, 21000, 23000,
				23000, 45000, 50000, 50000, 60000, 70000, 80000, 80000, 90000, 100000,
				110000, 90000, 80000, 70000, 40000, 40000, 30000, 35000, 10000, 10000,
			],
		},
		{
			name: "Overall Income",
			type: "area",
			data: [
				6700, 10000, 45000, 15000, 15000, 10000, 10000, 10000, 10000, 10000,
				10000, 30000, 30000, 30000, 50000, 27000, 50000, 40000, 60000, 80000,
				60000, 60000, 60000, 40000, 30000, 30000, 22000, 27000, 4000, 4000,
			],
		},
	],
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
	},
	xaxis: {
		labels: {
			datetimeFormatter: {
				year: "yyyy",
				month: "MMM 'yy",
				day: "dd MMM",
				hour: "HH:mm",
			},
		},
	},
	yaxis: {
		labels: {
			show: true,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$" + val;
			},
		},
	},
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.5,
			opacityTo: 0.7,
			stops: [0, 50, 100],
		},
	},
	colors: ["#fabb05", "#f23c7b"],
};

var chart = new ApexCharts(document.querySelector("#incomeData"), options);

chart.render();
