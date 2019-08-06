$(function(){
	//显示隐藏动画效果   开始
	$("#d1 #btn1").click(function(e){
		//$("#d1 div").show("slow");
		//$("#d1 div").show("fast");
		//$("#d1 div").show("2000");
		//$("#d1 div").show("2000",function(e){
			//alert("显示完毕");
		//});
		$("#d1 div").slideDown(3000);
	});
	$("#d1 #btn2").click(function(e){
		//$("#d1 div").hide("slow");
		//$("#d1 div").hide("fast");
		//$("#d1 div").hide("2000");
		//$("#d1 div").hide("2000",function(e){
			//alert("隐藏完毕");
		//});
		$("#d1 div").slideUp(3000);
	});
	
	//显示隐藏动画效果   结束
	
	//显示淡入淡出动画效果   开始
	$("#d2 #btn1").click(function(e){
		
		$("#d2 div").fadeIn(3000,function(e){
			alert("淡入完毕");
		});
	});
	$("#d2 #btn2").click(function(e){
		
		$("#d2 div").fadeOut(3000,function(e){
			alert("淡出完毕");
		});
	});
	
	//显示淡入淡出动画效果   结束
	
	//自定义动画开始
	$("#d3 div").click(function(e){
		//直着走
		//$(this).animate({marginLeft:"500px"},2000);
		//斜着走
		//$(this).animate({marginLeft:"500px",marginTop:"200px"},2000);
		//先直着走,再斜着走,走完后提示"走错了"
		$(this).animate({marginLeft:"500px"},2000);
		$(this).animate({marginLeft:"1000px",marginTop:"200px"},2000,function(e){
			alert("走错了");
		});
	});
	
	
	
	//自定义动画结束
	
	
	
	
	
});