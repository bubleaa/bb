(function  ($) {
	$.fn.lbt=function  (sd) {
		 var num=0;
	     var t;
	      sd = sd || 1000;
	      var imgs=$(this).find("img");
	      var _this=$(this);
	      console.log($(this));
	        for (var i=0;i<imgs.length;i++ ) {
				$(this).find("ul")[0].innerHTML+="<li></li>";
				
			 };
				lbimg(num);
				t = setInterval( function(){lbimg(++num);},sd);
				
				$(this).hover(function(){
					
					clearInterval(t);
					
				},function(){
					
					t = setInterval( function(){lbimg(++num);},sd);
					
				})
				
				for (var i =0;i<$(this).find("li").length;i++) {
					
					(function(i){
					
					_this.find("li")[i].onclick=function(){
						lbimg(i);
						num=i;
					}
					})(i);
				}
				$(this).find("a")[0].onclick=function(){
					
					lbimg(--num);
				}
				$(this).find("a")[1].onclick=function(){
					
					lbimg(++num);
				}
				
				
				
				function lbimg (a){
				if (a<0) {
					    a=imgs.length-1;
						num=imgs.length-1;
					}
				
				
				if (a>=imgs.length) {
					a=0;
					num=0;
				}
				
				
				imgs.eq(a).fadeIn(500);
				
				imgs.not(imgs.eq(a)).fadeOut(500);
				
				_this.find("li").eq(a).addClass('lbtli').siblings().removeClass('lbtli');
				
			}
		
	}
	
	
	
})(jQuery)
