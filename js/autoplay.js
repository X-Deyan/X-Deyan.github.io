// JavaScript Document
$(document).ready(function(e) {
	var i=0;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);
	var size=$(".banner .img li").size();
	$(".banner .num li").first().addClass("on")
	$(".banner .num li").hover(function(){
		var index=$(this).index()
		i=index;
		$(".banner .img").stop().animate({left:-index*990},500);
		$(this).addClass("on").siblings().removeClass("on")
		})
	$(".banner .btn_l").on("click",(moveL));
	
	$(".banner .btn_r").on("click",(moveR))
		
	var t=setInterval(moveL,2000)
	
	$(".banner").hover(function(){
		clearInterval(t);
		},function(){
		t=setInterval(moveL,2000)	
		})
	function moveL(){
		i++; 
		if(i==size){
			$(".banner .img").css({left:0})
			i=1;
			}
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
			}else{	
				$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
				}
		$(".banner .img").stop().animate({left:-i*990},500);
	
		
		}
	function moveR(){
		i--;
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*990})
			i=size-2;
			}
		$(".banner .img").stop().animate({left:-i*990},500)
		$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
		
	$("div.mphoto").mouseover(function(){
		$(".mphoto .mdetail").css("display","block")
		})
	$("div.mphoto").mouseover(function(){
		$(".mphoto .mdetail").css("display","none")
		})

})