var options = {
	chart: {
		width: 300,
		type: "pie",
	},
	labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
	series: [20, 20, 20, 20, 20],
	legend: {
		position: "bottom",
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 0,
	},
	colors: ["#0a50d8", "#57637B", "#7f8696", "#9da4b2", "#D6DAE3"],
};
var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();
