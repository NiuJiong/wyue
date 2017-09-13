$(function() {

	//	倒计时

	$(".forms .djs").click(function() {
		var num = parseInt($(this).html());
		console.log(num);
		if(isNaN(num)) {
			var time = 5;
			$(".forms .djs").html(time + 'S');
			time--;
			$(".forms .djs").addClass("active");
			var times = setInterval(function(even) {
				var t = time--;
				var text = t + "S";
				if(t > 0) {
					$(".forms .djs").html(text);
					$(".forms .djs").attr("disabled", "disabled");
					
				} else {
					$(".forms .djs").removeAttr("disabled", "disabled");
					$(".forms .djs").html("重新获取");
					clearTimeout(times);
					$(".forms .djs").removeClass("active");
				}
			}, 1000);
		};
	});

	$(".qihuan span").click(function() {
		var i = $(this).index();
		var j;
		if(i == 1) {
			j = 0;
		} else if(i == 0) {
			j = 1;
		}
		$(".qihuan span").removeClass("active");
		$(this).addClass("active");
		$(".fs").removeClass("active");
		$(".fs:eq(" + j + ")").addClass("active");
	});

})