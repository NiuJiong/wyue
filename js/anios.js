 	
 	var left = document.querySelector("header .left");
	var right = document.querySelector("header .right");
	var u = navigator.userAgent, app = navigator.appVersion;
	var ua = navigator.userAgent.toLowerCase();
	var form = document.querySelector("form .form-group");
	
	if (/android/.test(ua) && u.indexOf('MicroMessenger') > -1) {
		  left.style.marginLeft = "1rem";
		  right.style.marginRight = "1rem";
	}

