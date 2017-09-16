$(function(){
//	门店选择
	$(".ul").hide();
	$(".leixing").click(function(){
		$(".ul").slideToggle();
	});
	$(".ul li").click(function(){
		var txt = $(this).text();
		$(".leixing").text(txt);
		$(".ul").slideUp();
	});
});
