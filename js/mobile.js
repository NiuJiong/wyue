var menu = document.querySelector(".menu");
var li = menu.querySelectorAll("a");


var per = document.querySelector(".performance");
var ql = per.querySelectorAll(".ql");


for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("touchstart", function() {

		this.style.color = "#36c9ff";

	}, false);
	li[i].addEventListener("touchend", function() {

		this.style.color = "#454545";

	}, false);
}


console.log(ql);
for(var i = 0; i < ql.length; i++) {
	ql[i].addEventListener("touchstart", function() {

		this.querySelector("div").style.color = "#36c9ff";
		this.querySelector("p span").style.color = "#36c9ff";
	}, false);
	ql[i].addEventListener("touchend", function() {
		
		this.querySelector("div").style.color = "#2b2e3f";
		this.querySelector("p span").style.color = "#8c8c8c";

	}, false);
}
