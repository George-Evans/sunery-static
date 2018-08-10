$(document).ready(function() {

	// Populate Entries List	
	function populate() {
		var number = 0;
		while (number < entries.length) {
			$("#entries").append('\
				<div class="row">\
					<div class="col-8 col-md-7">' + entries[number].source + '</div>\
					<div class="col-auto order-3 col-md-3 order-md-2 light">' + $.format.date(entries[number].timestamp, "dd MMMM yyyy, HH:mm") + '</div>\
					<div class="col-4 col-md-2 order-md-3 al-r">' + entries[number].units + '<span class="kwh">kWh</span></div>\
				</div>'
			);
			number++;
		};
	};

	populate();
	
	// Sort by Date
	$("#sb-date").click(function() {
		$("#entries").empty();
		entries.sort(function(a, b){
			var dateA = new Date(a.timestamp), dateB = new Date(b.timestamp);
	    	return dateB - dateA;
		});
		populate();
	});

	// Sort by Units
	$("#sb-units").click(function() {
		$("#entries").empty();
		entries.sort(function(a, b){
	    return b.units - a.units;
		});
		populate();
	});

	// Nav Dropdown Tab Background
	$(".navdown").on("show.bs.dropdown", function () {
	  $(".dropdown-toggle", this).css("background-color", "#fff");
	}).on("hide.bs.dropdown", function () {
		$(".dropdown-toggle", this).css("background-color", "transparent");
	});

	// Nav Background On Scroll
	var bgHeight = $(".navbar-bg").height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 10) {
			$(".navbar-bg").height(bgHeight * 2);
		} else {
			$(".navbar-bg").height(bgHeight);
		}
	});

	// Animate Logo On Load
	$(".logomark").addClass("animate");


});