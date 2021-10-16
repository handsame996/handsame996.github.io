window.onload = function() {
	var yd = document.getElementById('yd');
	var yd1 = document.getElementById('yd1');
	var yd2 = document.getElementById('yd2');
	var btn1=document.getElementById('btn1');
	var btn2=document.getElementById('btn2');
	var btn3=document.getElementById('btn3');
	var box1=document.getElementById('box1');
	var box2=document.getElementById('box2');
	var pos = 170;
	var pof = 170; 
	var pot = 50;
	var timer = null;

	function f() {
		if (pos == 50) {
			clearInterval(timer);
		} else {
			pos -= 10;
			pof -=10
			yd1.style.transform = "rotateY(180deg) translateX("+pos+"px)";
			yd2.style.transform = " translateX("+pof+"px)";
		}
	}
	function ff() {
		if (pot == 170) {
			clearInterval(timer);
		} else {
			pot += 10;
			
			yd1.style.transform = "rotateY(180deg) translateX("+pot+"px)";
			yd2.style.transform = "translateX("+pot+"px)";
			
		}
	}
	

	yd.onmouseover = function() {
		
		timer = setInterval(f, 100);
	}
	yd.onmouseout = function() {
		
		timer = setInterval(ff, 100);
	}
	
	
	btn1.onclick=function(){
		box1.style.display="none";
		box2.style.display="block";
		box3.style.display="none";
		box4.style.display="none"; 
		
	}
 	btn2.onclick=function(){
		box1.style.display="none";
		box2.style.display="none";
		box3.style.display="block";
		box4.style.display="none";
	}
	btn3.onclick=function(){
		box1.style.display="none";
		box2.style.display="none";
		box3.style.display="none";
		box4.style.display="block";
	}
	
	
	
	
	
	
	

}
