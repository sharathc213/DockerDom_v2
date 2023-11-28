// Europe
$(function () {
	$("#mapEurope").vectorMap({
		map: "europe_mill",
		zoomOnScroll: false,
		series: {
			regions: [
				{
					values: gdpData,
					scale: ["#e94235", "#4285f4", "#fabb05", "#34a853"],
					normalizeFunction: "polynomial",
				},
			],
		},
		backgroundColor: "transparent",
	});
});
