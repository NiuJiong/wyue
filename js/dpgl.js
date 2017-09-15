
//var liswid = lis[0].offsetHeight / 2;
//var butto = lis[0].querySelector("div").offsetWidth;

//华南
function huadong(lis) {
	var liswid = lis[0].offsetHeight / 2;
	var butto = lis[0].querySelector("div").offsetWidth;
	var startx = starty = endx = endy = 0;
	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener('touchstart', function(even) {
			var tou = even.targetTouches[0];
			startx = tou.pageX;
			starty = tou.pageY;
		}, false);
		lis[i].addEventListener('touchmove', function(even) {
			var tou = even.targetTouches[0];
			endx = tou.pageX;
			endy = tou.pageY;

			var left = endx - startx;
			var right = endy - starty;


			for(var j=0;j< lis.length;j++){
				lis[j].style.transition = "all 0.1s";
				lis[j].style.marginLeft = "initial";
			}


			if(left <= -butto) {
				left = -butto;
			}
			var marginl = this.offsetLeft;
			console.log(marginl);
			if(left < marginl && right < liswid && left < 0) {
				this.style.transition = "all 0s";
				this.style.marginLeft = left + 'px';
			}

			if(left >= butto) {
				left = butto;
			}

			if(left >= 0 && marginl > butto/2) {
				this.style.transition = "all 0s";
				this.style.marginLeft = -butto + left + 'px';
			}
		}, false);

		lis[i].addEventListener('touchend', function(even) {

			var zjz = butto / 3;
			var left = endx - startx;
			var right = endy - starty;
			if(left >= -zjz && left < 0 && right < liswid) {
				this.style.transition = "all 0.1s";
				this.style.marginLeft = "initial";
			} else if(left < -zjz && left < 0 && right < liswid) {
				this.style.transition = "all 0.1s";
				this.style.marginLeft = -butto + 'px';
			} else if(left >= zjz && right < liswid) {
				this.style.transition = "all 0.1s";
				this.style.marginLeft = 0;
			} else if(left > 0 && left < zjz && right < liswid) {
				this.style.transition = "all 0.1s";
				this.style.marginLeft = -butto + 'px';
			}
		}, false);
	}
};


//var two = document.querySelector("#two");
//var list = two.querySelectorAll(".panel-body ul li");
var list = document.querySelectorAll(".huadong");

//var two = document.querySelector("#three");
//var listthree = three.querySelectorAll(".panel-body ul li");
console.log(list)

huadong(list);
//huadong(listthree);
