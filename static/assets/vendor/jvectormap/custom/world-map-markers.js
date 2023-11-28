// Markers on the world map
$(function () {
	$("#world-map-markers").vectorMap({
		map: "world_mill_en",
		normalizeFunction: "polynomial",
		hoverOpacity: 0.7,
		hoverColor: false,
		zoomOnScroll: false,
		markerStyle: {
			initial: {
				fill: "#e94235",
				stroke: "#e94235",
				r: 6,
			},
		},
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
		backgroundColor: "transparent",
	});
});
