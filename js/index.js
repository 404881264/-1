define(["jquery", "jquery-cookie"], function($){
	var index = function(){
		console.log("首页");
		//加载数据解析数据

		$(function(){

			$.ajax({
				url: "data/data.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += '<li class="current"  ><a href="#"><img src="'+res[i].img+'" alt=""></a></li>';
					}
					html += '<li class="current"  ><a href="#"><img src="'+res[0].img+'" alt=""></a></li>';
					$(".topslider ul").html(html);
				}
			})
		})
		$(function(){
			var aBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("active").eq(iNow).addClass("active");
				if(iNow == 7){
					aBtns.eq(0).addClass("active");
				}
				//让ul动
				oUl.animate({
					top: -247 * iNow
				}, 1000, function(){
					if(iNow == 7){
						iNow = 0;
						oUl.css("top", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var i = 0;
			setInterval(function(){
				i++;
				$(".hour").html(doubleNum(parseInt((43200-i)/3600)));
				$(".minute").html(doubleNum(parseInt((43200-i)/60)%60));
				$(".second").html(doubleNum((43200-i)%60));
			},1000)
			function doubleNum(num){
				if(num < 10){
					return "0" + num;
				}else{
					return num;
				}
			}
		})
		$(function(){

			$.ajax({
				url: "data/dete.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += '<li class="current"  ><p class="img"><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p></li>';
					}
					html += html;
					$(".proslider .mover .prolist").html(html);
				}
			})
		})
		$(function(){
			var i = 0;
			var j = -1;
			setInterval(function(){
				
				j *= -1;
				i += j;
				$(".proslider .mover .prolist").animate({
					left: -744 * i
				})
			},5000)
		})
		$(function(){

			$.ajax({
				url: "data/date.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += '<li class="current"  ><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></li>';
					}
					html += '<li class="current"  ><a href="shop.html"><img src="'+res[0].img+'" alt=""></a></li>';
					$("#player .mover .prolist").html(html);
				}
			})
		})
		$(function(){
			var aBtns = $("#player").find(".nav").find("a");
			var oUl = $("#player").find(".mover").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 4){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -226 * iNow
				}, 1000, function(){
					if(iNow == 4){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#player").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
            $('#Container_HotReviews').find('.hot_sale').find('.hot_comment_goods_cnt').find('.hot_comment_goods_c1').mouseover(function(){
            	$(this).stop().animate({
                	'width':'675px'
            	}).siblings().stop().animate({
                	'width':'173px'
            	});
         	});
        });
        $(function(){

			$.ajax({
				url: "data/deta.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < 5; i++){
						html += '<li class="current"  ><p class="img"><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p></li>';
					}
					$(".promotion .tabc").eq(0).find("ul").html(html);
				}
			})
			$.ajax({
				url: "data/deta.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 5; i < 10; i++){
						html += '<li class="current"  ><p class="img"><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p></li>';
					}
					$(".promotion .tabc").eq(1).find("ul").html(html);
				}
			})
			$.ajax({
				url: "data/deta.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 10; i < 15; i++){
						html += '<li class="current"  ><p class="img"><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p></li>';
					}
					$(".promotion .tabc").eq(2).find("ul").html(html);
				}
			})
			$.ajax({
				url: "data/deta.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 15; i < 20; i++){
						html += '<li class="current"  ><p class="img"><a href="shop.html"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p></li>';
					}
					$(".promotion .tabc").eq(3).find("ul").html(html);
				}
			})
		})
		$(function(){
			var _index = 0;
			for(var i = 0; i < 4; i++){
				$(".promotion .tab a").eq(i).hover(function(){
					$(".promotion .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".promotion .tabc").css("display","none");
					$(".promotion .tabc").eq(_index).css("display","block");
				})
			}
		})
		$(function(){

			$.ajax({
				url: "data/shop.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < 3; i++){
						html += '<li class="current"  ><a href="#"><img src="'+res[i].img+'" alt=""></a></li>';
					}
					html += '<li class="current"  ><a href="#"><img src="'+res[0].img+'" alt=""></a></li>';
					$("#Container_Banner .mover .prolist").html(html);
				}
			})
		})
		$(function(){
			var aBtns = $("#Container_Banner").find(".nav").find("a");
			var oUl = $("#Container_Banner").find(".mover").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -238 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#Container_Banner").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var aBtns = $("#ad_slider").find(".nav").find("a");
			var oUl = $("#ad_slider").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -480 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#ad_slider").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var aBtns = $("#ad_slider_1").find(".nav").find("a");
			var oUl = $("#ad_slider_1").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -480 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#ad_slider_1").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var aBtns = $("#ad_slider_2").find(".nav").find("a");
			var oUl = $("#ad_slider_2").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -480 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#ad_slider_2").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var aBtns = $("#ad_slider_3").find(".nav").find("a");
			var oUl = $("#ad_slider_3").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -480 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#ad_slider_3").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			var aBtns = $("#ad_slider_4").find(".nav").find("a");
			var oUl = $("#ad_slider_4").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("current").eq(iNow).addClass("current");
				if(iNow == 3){
					aBtns.eq(0).addClass("current");
				}
				//让ul动
				oUl.animate({
					left: -480 * iNow
				}, 1000, function(){
					if(iNow == 3){
						iNow = 0;
						oUl.css("left", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$("#ad_slider_4").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

		})
		$(function(){
			for(var i = 0; i < 8;i++){
				$(".brandlogo ul li").eq(i).find("a").hover(function(){
					$(this).find("img").css("top",-40)
				},function(){
					$(this).find("img").css("top",0)
				})
				$(".brandlogo_1 ul li").eq(i).find("a").hover(function(){
					$(this).find("img").css("top",-40)
				},function(){
					$(this).find("img").css("top",0)
				})
				$(".brandlogo_2 ul li").eq(i).find("a").hover(function(){
					$(this).find("img").css("top",-40)
				},function(){
					$(this).find("img").css("top",0)
				})
				$(".brandlogo_3 ul li").eq(i).find("a").hover(function(){
					$(this).find("img").css("top",-40)
				},function(){
					$(this).find("img").css("top",0)
				})
				$(".brandlogo_4 ul li").eq(i).find("a").hover(function(){
					$(this).find("img").css("top",-40)
				},function(){
					$(this).find("img").css("top",0)
				})
			}
			
		})
		$(function(){
			var _index = 0;
			for(var i = 0; i < 2; i++){
				$(".hotrank .inner .tab a").eq(i).hover(function(){
					$(".hotrank .inner .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".hotrank .inner .tabc").css("display","none");
					$(".hotrank .inner .tabc").eq(_index).css("display","block");
				})
				$(".hotrank .inner_1 .tab a").eq(i).hover(function(){
					$(".hotrank .inner_1 .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".hotrank .inner_1 .tabc").css("display","none");
					$(".hotrank .inner_1 .tabc").eq(_index).css("display","block");
				})
				$(".hotrank .inner_2 .tab a").eq(i).hover(function(){
					$(".hotrank .inner_2 .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".hotrank .inner_2 .tabc").css("display","none");
					$(".hotrank .inner_2 .tabc").eq(_index).css("display","block");
				})
				$(".hotrank .inner_3 .tab a").eq(i).hover(function(){
					$(".hotrank .inner_3 .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".hotrank .inner_3 .tabc").css("display","none");
					$(".hotrank .inner_3 .tabc").eq(_index).css("display","block");
				})
				$(".hotrank .inner_4 .tab a").eq(i).hover(function(){
					$(".hotrank .inner_4 .tab a").removeClass("now");
					$(this).addClass("now");
					_index = $(this).index();
					$(".hotrank .inner_4 .tabc").css("display","none");
					$(".hotrank .inner_4 .tabc").eq(_index).css("display","block");
				})
			}
		})
		$(function(){

			$.ajax({
				url: "data/nav.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					
					var html_1 = "";
					var html_2 = "";
					var html_3 = "";
					var html_4 = "";
					
					for(var i = 0; i < 7; i++){
							html += '<tr>';
							html += '<th><label>'+res[i].title+'</label></th>';
							var html_a = res[i].subTitle;
							var value = "";
						for(var j = 0; j <html_a.length; j++){
							value += '<td><a href="#">'+html_a[j]+'</a>&nbsp;</td>';
						}
						html += value;
						html += '</tr>';
					}
					
					for(var i = 7; i < 13; i++){
							html_1 += '<tr>';
							html_1 += '<th><label>'+res[i].title+'</label></th>';
							var html_a = res[i].subTitle;
							var value = "";
						for(var j = 0; j <html_a.length; j++){
							value += '<td><a href="#">'+html_a[j]+'</a>&nbsp;</td>';
						}
						html_1 += value;
						html_1 += '</tr>';
					}
					for(var i = 13; i < 22; i++){
							html_2 += '<tr>';
							html_2 += '<th><label>'+res[i].title+'</label></th>';
							var html_a = res[i].subTitle;
							var value = "";
						for(var j = 0; j <html_a.length; j++){
							value += '<td><a href="#">'+html_a[j]+'</a>&nbsp;</td>';
						}
						html_2 += value;
						html_2 += '</tr>';
					}
					for(var i = 22; i < 30; i++){
							html_3 += '<tr>';
							html_3 += '<th><label>'+res[i].title+'</label></th>';
							var html_a = res[i].subTitle;
							var value = "";
						for(var j = 0; j <html_a.length; j++){
							value += '<td><a href="#">'+html_a[j]+'</a>&nbsp;</td>';
						}
						html_3 += value;
						html_3 += '</tr>';
					}
					for(var i = 30; i < 38; i++){
							html_4 += '<tr>';
							html_4 += '<th><label>'+res[i].title+'</label></th>';
							var html_a = res[i].subTitle;
							var value = "";
						for(var j = 0; j <html_a.length; j++){
							value += '<td><a href="#">'+html_a[j]+'</a>&nbsp;</td>';
						}
						html_4 += value;
						html_4 += '</tr>';
					}
					$(".ddwrap table .tbody_1").html(html);
					
					$(".ddwrap table .tbody_2").html(html_1);
					$(".ddwrap table .tbody_3").html(html_2);
					$(".ddwrap table .tbody_4").html(html_3);
					$(".ddwrap table .tbody_5").html(html_4);
				}
			})
		})
	}
	return {
		index: index
	}
})