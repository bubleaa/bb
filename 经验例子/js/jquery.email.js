(function  ($) {
	$.fn.autoEmail=function () {
		var arr=["@163.com","@qq.com","@mq.cn"];
		var _this = $(this);
		$(this).focus(function  () {
			
			//if (_this.attr("data-email")=="ture") {
				
				$("#inpu1").remove();
			   var text="";
				for (var i=0;i<arr.length;i++) {
					text+="<p>"+_this.val()+arr[i]+"</p>";
				}
				
			//}
			var thiscss={
				border:"1px solid #000000" , top : _this.position().top+_this.innerHeight(),
				left:_this.position().left ,
				position: "absolute"
			}
			console.log(_this.position());
			var div1=$("<div id='inpu1'></div>");
			
			div1.html(text);
			
			$("body").append(div1);
		    
		
		})
		
		
		
		
	}
	
	
})(jQuery);
