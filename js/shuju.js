$(function(){
	
	
//	选项卡切换
	
	$(".year ul li").click(function(){
		
		var index = $(this).index();
		
		$(".year ul li").removeClass("active");
		$(this).addClass("active");
		
		$(".tablis").removeClass("active");
		$(".tablis:eq("+index+")").addClass("active");
	});
	
//	选择框选中
	$(".tablis .option span").click(function(){
		$(".tablis .option span").removeClass("active");
		$(this).addClass("active");
	});
	
});
