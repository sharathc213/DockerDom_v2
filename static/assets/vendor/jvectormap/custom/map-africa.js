// Africa
$(function () {
	$("#mapAfrica").vectorMap({
		map: "africa_mill",
		backgroundColor: "transparent",
		scaleColors: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
		zoomOnScroll: false,
		zoomMin: 1,
		hoverColor: true,
		series: {
			regions: [
				{
					values: gdpData,
					scale: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
					normalizeFunction: "polynomial",
				},
			],
		},
	});
});
