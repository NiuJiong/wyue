$(function(){
//	门店选择
	$(".leixing").click(function(){
		if($(this).next().hasClass("active")){
			$(this).next().removeClass("active");
		}else{
			$(this).next().addClass("active");
		}
	});
	$(".ul li").click(function(){
		var txt = $(this).text();
		$(".leixing span").text(txt);
		$(".ul").removeClass("active");
	});
	$(".nan span").click(function(){
		$(".nan span").removeClass("active");
		$(this).addClass("active");
	});
});
