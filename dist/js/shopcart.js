define(["jquery", "jquery-cookie"], function($){
	var shopcart = function(){
		console.log("首页");
		$(function(){
			sc_car();
			sc_msg();
			$.ajax({
				url: "data/dete.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += '<li class="current"  ><p class="img"><a href="#"><img src="'+res[i].img+'" alt=""></a></p><p class="title"><a href="#">'+res[i].p+'</a></p><p><span class="price">'+res[i].price+'</span></p><button class="egg_btns_t1 egg_btns_white mt15" id="'+res[i].id+'">加入购物车</button></li>';
					}
					$("#tab1_content .mover .prolist").html(html);
				}
			})
		})
		//给购物车按钮添加事件
		//页面控件非常多，非常容易叠加，很容易造成事件冒泡
		$(".mover").on("click", ".egg_btns_t1", function(){

			//抛物线运动
			move(this);
			sc_msg();
			

			// alert(this.id);
			//是否是第一次添加cookie
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				//第一次添加  [{id:id,num:2}]
				$.cookie("goods", '[{id:' + id + ',num:1}]', {
					expires: 7
				});
				sc_car();
			}else{
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false; //代表是否有相同商品

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						same = true;
						break;
					}
				}

				//没有相同的商品
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
				}
				sc_car();
			}

			// alert($.cookie("goods"));


			return false;
		})


		/*
			mouseenter  移入
			mouseleave  移出
		*/

		//购物车数字
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$(".numb").html(sc_num);
			}
		}

		//已经存储在cookie数据进行加载
		function sc_msg(){
			$.ajax({
				url: "data/dete.json",
				type: "get",
				success: function(res){
					
					var sc_arr = eval($.cookie("goods"));
					var html = '';
					var money = 0;
					for(var i in sc_arr){
						var omon = "";
						var str = res[sc_arr[i].id].price;
						omon = parseInt(str.substring(1)) * sc_arr[i].num;
						var omon_1 = "￥" + omon;
						html += '<tr class="'+sc_arr[i].id+'"><td class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""><span>'+res[sc_arr[i].id].p+'</span></td><td class="sc_goodsNum"><span class="Arial14">'+res[sc_arr[i].id].price+'</span></td><td class="sc_goodsNum"><span class="Arial14 num_b"><a href="javascript:void(0)" class="'+sc_arr[i].id+'">-</a>'+sc_arr[i].num+'<a href="javascript:void(0)" class="'+sc_arr[i].id+'">+</a></span></td><td class="sc_goodsNum"><span class="Arial14">'+omon_1+'</span></td><td class="sc_goodsNum"><span class="Arial14"><a href="javascript:void(0)" class="remove">删除</a></span></td></tr>';
						
						money += parseInt(str.substring(1)) * sc_arr[i].num;
						
					}
						var mon = "￥" + money;
					$("#shoppingCartList #VendorSysNo_1").html(html);
					$(".ll_darkgray .tr_3 strong").html(mon);
					for(var j = 0; j < $("#VendorSysNo_1 .remove").length; j++){
						$("#VendorSysNo_1 .remove").eq(j).on("click",function(){
							$.cookie("goods",null);
							sc_msg();
							$(".numb").html(0);
						})
					}
					for(var j = 0; j < $("#VendorSysNo_1 .num_b").length; j++){
						$("#VendorSysNo_1 .num_b").eq(j).find("a").eq(0).on("click",function(){
							var sc_arr = eval($.cookie("goods"));
							var id = $(this).attr("class");
							
							for(var i in sc_arr){
								if(sc_arr[i].id == id){
									if(sc_arr[i].num > 1){
										sc_arr[i].num = sc_arr[i].num - 1;
										var cookieStr = JSON.stringify(sc_arr);
										$.cookie("goods", cookieStr,  {
											expires: 7
										});
									}
									
								}
					
								sc_msg();
								sc_car();
							}
							
							
						})
					}
					for(var j = 0; j < $("#VendorSysNo_1 .num_b").length; j++){
						$("#VendorSysNo_1 .num_b").eq(j).find("a").eq(1).on("click",function(){
							var sc_arr = eval($.cookie("goods"));
							var id = $(this).attr("class");
							
							for(var i in sc_arr){
								if(sc_arr[i].id == id){
									sc_arr[i].num = sc_arr[i].num + 1;
									var cookieStr = JSON.stringify(sc_arr);
									$.cookie("goods", cookieStr,  {
										expires: 7
									});
								}
					
								sc_msg();
								sc_car();
							}
							
							
						})
					}
				}
			})
			
		}
		function move(_this) {
			var cart = $('.numb');
			var imgtodrag = $(_this).parent('.current').find('.img').find('a').find('img').eq(0);//获取当前btn
			if (imgtodrag) {
				var imgclone = imgtodrag.clone().offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left
				}).css({
					'opacity': '0.5',
					'position': 'absolute',
					'height': '150px',
					'width': '150px',
					'z-index': '100'
				}).appendTo($('body')).animate({
					'top': cart.offset().top,
					'left': cart.offset().left + 10,
					'width': 75,
					'height': 75
				}, 1000);
				imgclone.animate({
					'width': 10,
					'height': 10
				}, function () {
					$(this).detach();
				});

			}
		}

		
	}
	return {
		shopcart: shopcart
	}
})