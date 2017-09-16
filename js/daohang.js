//导航

$(function() {

	//	+号弹框
	$("header ul li:eq(2) a").click(function() {
		if($("header ul li:eq(2) div").hasClass("active")) {
			$("header ul li:eq(2) div").removeClass("active");
		} else {
			$("header ul li:eq(2) div").addClass("active");
		}
	});

	//	弹框点击效果
	var head = document.querySelector("header");
	var headaa = head.querySelectorAll("div a");

	for(var i = 0; i < headaa.length; i++) {
		headaa[i].addEventListener("touchstart", function() {

			this.style.color = "#36c9ff";
			this.style.backgroundColor = "#ececec";
		}, false);
		headaa[i].addEventListener("touchend", function() {

			this.style.color = "#454545";
			this.style.backgroundColor = "";
		}, false);
		headaa[i].addEventListener('contextmenu', function(e) {
			e.preventDefault();
		});
	}
})