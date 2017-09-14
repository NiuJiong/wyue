$(function(){
	$("header ul li:eq(2) a").click(function(){
		if($("header ul li:eq(2) div").hasClass("active")){
			$("header ul li:eq(2) div").removeClass("active");
		}else{
			$("header ul li:eq(2) div").addClass("active");
		}
	});
	
	
//	时间弹窗
	$(".modal-dialog .btn").click(function(){
		$(".modal-dialog .btn").removeClass("active");
		$(this).addClass("active");
	});
	
});
