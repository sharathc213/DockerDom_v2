// Morris Negative values
var neg_data = [
	{ period: "2022-02-12", a: 100 },
	{ period: "2022-01-03", a: 75 },
	{ period: "2021-08-08", a: 50 },
	{ period: "2021-05-10", a: 25 },
	{ period: "2021-03-14", a: 0 },
	{ period: "2021-01-10", a: -25 },
	{ period: "2020-12-10", a: -50 },
	{ period: "2020-10-07", a: -75 },
	{ period: "2020-09-25", a: -100 },
];
Morris.Line({
	element: "negativeValues",
	data: neg_data,
	xkey: "period",
	ykeys: ["a"],
	labels: ["Series A"],
	units: "%",
	resize: true,
	hideHover: "auto",
	gridLineColor: "rgba(255, 255, 255, .30)",
	pointFillColors: ["#ffffff"],
	pointStrokeColors: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
	lineColors: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
});
