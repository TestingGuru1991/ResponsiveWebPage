// JavaScript Document

$(document).ready(function() {
	$('.bounce').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
	});
	$('.bounce').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
});

$(document).ready(function() {
	$("#branding").mouseenter( function(){
		$("#branding span.l2").show();
		$("#branding .logo.l2").delay(0).animate({opacity: 0}, 20);
		$("#branding .web.l2").delay(100).animate({opacity: 0}, 20);
		$("#branding .graphic.l2").delay(200).animate({opacity: 0}, 20);
		$("#branding .seo.l2").delay(300).animate({opacity: 0}, 20, function() {
			$("#branding span").css('display', 'none').css('opacity', '1');
		});
	});
});