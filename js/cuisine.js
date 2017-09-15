$(function(){
	$(".pxlis ul li").click(function(){
		
		$(".pxlis ul li").removeClass("active");
		$(this).addClass("active");
		
		
		var index = $(this).index();
		
		$(".pxlis ol").removeClass("active");
		
		$(".pxlis ol:eq("+index+")").addClass("active");
		
	});
});
