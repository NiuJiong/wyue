$(function(){
	
	$(".performance ol li").click(function(){
		
		var index = $(this).index();
		
		$(".performance ol li").removeClass("active");
		$(this).addClass("active");
		$(".performance ul").removeClass("active");
		
		$(".performance ul:eq("+index+")").addClass("active");
		
	});
	
	
});



