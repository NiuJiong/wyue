 	
 	var left = document.querySelector("header .left");
	var right = document.querySelector("header .right");
	var userleft = document.querySelector(".user .mleft");
	var userwid = document.querySelector(".user .wid");
	var u = navigator.userAgent, app = navigator.appVersion;
	var ua = navigator.userAgent.toLowerCase();
	
	if (/iphone|ipad|ipod/.test(ua)) {
//		   alert("ios");
	} else if (/android/.test(ua) && u.indexOf('MicroMessenger') > -1) {
		  left.style.marginLeft = "1rem";
		  right.style.marginRight = "1rem";
		  userleft.style.marginLeft = "1rem"; 
		  userwid.style.width = "12.65rem";  
	}

