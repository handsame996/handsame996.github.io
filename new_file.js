window.onload=function(){
	function lunbotu(){
		
	
		var top = document.getElementById('top');
		var picture = document.querySelectorAll('#pictur');
		var diop = document.querySelectorAll('#dio');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 0;
		var timer = null;

		var clearindex = function() {
			for (var i = 0; i < picture.length; i++) {
				picture[i].className = "picture";
				diop[i].className = "diop";

			}
		}
		var goindex = function() {
			clearindex();
			picture[index].className = "picture first"
			diop[index].className = "diop one";
		}

		for (var i = 0; i < diop.length; i++) {
			dio[i].addEventListener('click', function() {
				var dioindex = this.getAttribute('data-index');
				index = dioindex;
				goindex();
			})
			left.onclick = function() {
				index--;
				if (index < 0) {
					index = 2;
				}
				goindex();
			}
			right.onclick = function() {
				index++;
				if (index > 2) {
					index = 0;
				}

				goindex();
			}
		}
		top.onmousemove = () => {
			clearInterval(timer);
		}
		top.onmouseout = () => {
			timer = setInterval(function() {
				index++;
				if (index > 2)
					index = 0;
				goindex();
			}, 4000)
		}
	}
	
		
 	function messageBox(){
		var leftMb=document.getElementById('left-mb');
		var rightMb=document.getElementById('right-mb');
		var hid=document.getElementById('hid');
		var i=0;
		var leftNum=null;
		
		
		rightMb.onclick=leftMb.onclick=function(){
			i++;
			if(i%2){
				hid.style.right = i+'px';
			}else{
				hid.style.right = -1155+'px';
			}
		}
		
	}	
	
	function transform(){
		var btn=document.querySelectorAll('#btn');
		for(var i=0;i<btn.length;i++){
			btn[i].addEventListener('mousemove',function(){
				this.style.transform="scale("+1.5+")";
			})
			btn[i].addEventListener('mouseout',function(){
				this.style.transform="scale("+1+")";
			})
		}
	}
	
	 
	
	
	
	
	
	
	
	
	
	 
	lunbotu();
	transform();
		messageBox();	 
		
		
}