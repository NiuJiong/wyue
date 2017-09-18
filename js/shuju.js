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
	
	
//	弹框
$(".two").height($("body").height());
	$(".time .one").click(function(){
		if($(".two").hasClass("active")){
			$(".two").removeClass("active");
			$("body").removeClass("active");
			$(".sc").removeClass("active");
		}else{
			$(".two").addClass("active");
			$("body").addClass("active");
			$(".sc").addClass("active");
		}
	});
	
	$(".two button").click(function(){
		$(".two button").removeClass("active");
		$(this).addClass("active");
		$(".two").removeClass("active");
		$("body").removeClass("active");
		$(".sc").removeClass("active");	
	});
//	
//	$(".two").click(function(){
//		$(".time .two").removeClass("active");
//		$("body").removeClass("active");
//	});
//	$(document).mouseup(function(e){
//	  var _con = $('.time .two');   // 设置目标区域
//	  if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
//	   $(".time .two").removeClass("active");
//	  }
//	});
});
