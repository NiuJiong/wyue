var two = document.querySelector("#two");
var lis = two.querySelectorAll(".panel-body ul li");
var liswid = lis[0].offsetHeight/2;
var butto = lis[0].querySelector("div").offsetWidth;

//console.log(liswid);
var startx = starty= endx = endy =0;
for(var i=0;i<lis.length;i++){
	lis[i].addEventListener('touchstart',function(even){
		var tou =  even.targetTouches[0];
		startx = tou.pageX;
		starty = tou.pageY;
	},false);
	lis[i].addEventListener('touchmove',function(even){
		var tou =  even.targetTouches[0];
		endx = tou.pageX;
		endy = tou.pageY;
		
		
		var left = endx - startx;
		var right = endy - starty;
		
		if(left <= -butto){
			left = -butto;
		}
		var marginl = this.offsetLeft;
		if(left < marginl && right <liswid && left < 0){
			this.style.marginLeft = left+'px';
		}
		
		if(left >=butto){
			left = butto;
		}
		console.log(marginl);
		console.log(left);
		if( marginl<0 && left >0){
			this.style.marginLeft = -butto + left +'px';
		}
		
		
//		if(left<=marginl){
//			this.style.marginLeft = left+'px';
//		}
//		
//		if(marginl < butto/4*-1){
//			this.style.marginLeft = -butto +'px';
//			this.style.transition = "all 0.5s";
//		}else 
		
		
		
//		if(left>0 && right <liswid && marginl < 0){
//			
//			var rilf = left + marginl;
//			
//			this.style.marginLeft = rilf+'px';
//		}
	},false);
	
	
	lis[i].addEventListener('touchend',function(even){
		
		var zjz = butto/3; 
		var marginl = this.offsetLeft;
		var left = endx - startx;
		var right = endy - starty;
		if(marginl >= -zjz && left < 0 && left < liswid){
			this.style.transition = "all 0.3s";
			this.style.marginLeft = 0;
		}else if(marginl < -zjz && left < 0 && left < liswid){
			this.style.transition = "all 0.3s";
			this.style.marginLeft = -butto +'px';
		}
	},false);
}




var three = document.querySelector("#three");
var lis = three.querySelectorAll(".panel-body ul li");