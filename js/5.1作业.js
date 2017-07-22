/*
* @Author: Administrator
* @Date:   2017-05-04 18:58:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 11:05:25
*/

//大轮播图
$(function(){
	var arr = [];
	var num = 1;
	var count = $(".banner .banner_img img").length;
	var timer = null;
	//原点切换,显示图片、文字
	function points(index){
		$(".banner ul li").eq(index).addClass('current').siblings('li').removeClass('current');
		$(".banner .banner_img img").eq(index).show().siblings('img').hide();
	}
	points(0);
	$(".banner .right_btn").click(function(){
		if (num == count) {
			num = 1;
		}else{
			num++;
		};
		points(num-1);
	})
	$(".banner .left_btn").click(function(){
		if (num == 1) {
			num = count;
		}else{
			num--;
		};
		points(num-1);
	})
	//自动轮播
	timer = setInterval("$('.right_btn').click()", 2000);
	//鼠标进入停止轮播 鼠标离开则继续轮播
	$(".banner .banner_img img").mouseover(function() {
		clearInterval(timer);
	});
	$(".banner .banner_img img").mouseout(function() {
		timer = setInterval("$('.right_btn').click()", 2000);
	});
	//鼠标经过圆点,跳转相对应图片
	$(".banner ul li").mouseover(function() {
		var index = $(this).index();
		num = index+1;
		points(index);
	})
})