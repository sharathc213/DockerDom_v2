// World Map GDP
$(function () {
	$("#world-map-gdp").vectorMap({
		map: "world_mill_en",
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
		onRegionTipShow: function (e, el, code) {
			el.html(el.html() + " (GDP - " + gdpData[code] + ")");
		},
	});
});
