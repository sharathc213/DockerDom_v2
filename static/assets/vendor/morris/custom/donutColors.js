// Morris Donut
Morris.Donut({
	element: "donutColors",
	data: [
		{ value: 30, label: "foo" },
		{ value: 15, label: "bar" },
		{ value: 10, label: "baz" },
		{ value: 5, label: "A really really long label" },
	],
	labelColor: "#507D0C",
	colors: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
	resize: true,
	hideHover: "auto",
	gridLineColor: "rgba(255, 255, 255, .30)",
	formatter: function (x) {
		return x + "%";
	},
});
