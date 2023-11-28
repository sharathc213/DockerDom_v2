// Rating
$(function () {
	$.fn.raty.defaults.path = "assets/";
	$("#rate1").raty({ score: 4 });
	$("#rate2").raty({ score: 5 });
	$("#rate3").raty({ score: 5 });
	$("#rate4").raty({ score: 4 });
	$("#rate5").raty({ score: 3 });
	$("#rate6").raty({ score: 2 });

	$(".rate1").raty({ score: 4 });
	$(".rate2").raty({ score: 5 });
	$(".rate3").raty({ score: 5 });
	$(".rate4").raty({ score: 4 });
	$(".rate5").raty({ score: 3 });
	$(".rate6").raty({ score: 2 });

	// Read Only
	$(".starReadOnly0").raty({ readOnly: true, score: 0 });
	$(".starReadOnly1").raty({ readOnly: true, score: 5 });
	$(".starReadOnly2").raty({ readOnly: true, score: 4 });
	$(".starReadOnly3").raty({ readOnly: true, score: 3 });
	$(".starReadOnly4").raty({ readOnly: true, score: 2 });
	$(".starReadOnly5").raty({ readOnly: true, score: 1 });
});
