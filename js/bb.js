$(function() {

	//	业绩选项卡切换

	$(".performance ol li").click(function() {

		var index = $(this).index();

		$(".performance ol li").removeClass("active");
		$(this).addClass("active");
		$(".performance ul").removeClass("active");

		$(".performance ul:eq(" + index + ")").addClass("active");
	});
});

//<!--		菜单点击效果-->
var menu = document.querySelector(".menu");
var li = menu.querySelectorAll("a");
for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("touchstart", function() {

		this.style.color = "#36c9ff";
		this.style.backgroundColor = "#ececec";
	}, false);
	li[i].addEventListener("touchend", function() {

		this.style.color = "#454545";
		this.style.backgroundColor = "";
	}, false);
	li[i].addEventListener('contextmenu', function(e) {
		e.preventDefault();
	});
}

//<!--		业绩点击效果-->
var per = document.querySelector(".performance");
var ql = per.querySelectorAll(".ql");

for(var i = 0; i < ql.length; i++) {
	ql[i].addEventListener("touchstart", function() {
		this.style.backgroundColor = "#ececec";
		this.querySelector("div").style.color = "#36c9ff";
		this.querySelector("p span").style.color = "#36c9ff";
	}, false);
	ql[i].addEventListener("touchend", function() {

		this.querySelector("div").style.color = "#2b2e3f";
		this.querySelector("p span").style.color = "#8c8c8c";
		this.style.backgroundColor = "";
	}, false);
	ql[i].addEventListener('contextmenu', function(e) {
		e.preventDefault();
	});
}


//头像和时间点击效果

var md = document.querySelector(".user .wid div a");
var sp = document.querySelector(".user .wid div span");
md.addEventListener("touchstart", function() {

		this.style.color = "#36c9ff";
		this.style.backgroundColor = "#ececec";

}, false);
md.addEventListener("touchend", function() {

		this.style.color = "#454545";
		this.style.background = ""
}, false);
	md.addEventListener('contextmenu', function(e){
	    e.preventDefault();
	});
sp.addEventListener("touchstart", function() {
		this.style.backgroundColor = "#ececec";
		this.style.color = "#36c9ff";

}, false);
sp.addEventListener("touchend", function() {

		this.style.color = "#454545";
		this.style.background = ""
}, false);

	sp.addEventListener('contextmenu', function(e){
	    e.preventDefault();
	});