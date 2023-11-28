var options = {
	series: [70],
	chart: {
		height: 160,
		type: "radialBar",
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		radialBar: {
			hollow: {
				size: "70%",
			},
			track: {
				background: "#b6bdd6",
			},
		},
	},
	labels: ["Orders"],
	colors: ["#fabb05", "#f23c7b", "#ffffff"],
};

var chart = new ApexCharts(document.querySelector("#ordersData"), options);
chart.render();
