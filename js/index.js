$(function(){
	// 页面初加载
	$(window).load(function(){
		setTimeout(function(){
			$('.nav').css({'opacity':'1','transition':'all 0.5s linear'})
		},200)
		setTimeout(function(){
			$('.header div').css({'opacity':'1','transition':'all 0.5s linear'})
		},500)
	})

	// 导航栏点击
	if($(window).width()>=900){	
		$('.nav .right li').eq(0).on('click',function(){
			$('.ban').slideDown(500);
		})	
		$('.ban .right ul li').eq(0).children('a').on('click',function(){
			$('.ban').slideUp(500);
		})
	}else{
		$('.nav .right li').eq(0).on('click',function(){
			$('.banner').slideDown(500)
			$('.nav').hide()
			$('.banner').css({'background':'rgba(106,101,101,0.3)'})
			$('.banner .right li').css({'background':'rgba(104,101,101,0.5)'})
		})	
		$('.banner .right ul li').children('a').on('click',function(){
			$('.banner').slideUp(500)
			$('.nav').show()
		})
	}

	// 滚动
	$(window).scroll(function(){
		var wTop=document.documentElement.scrollTop||document.body.scrollTop;

		// 回到顶部
		if(wTop!=0){
			$('.dj').on('click',function(){
				$('body,html').stop().animate({scrollTop:0},2000)
			})
		}

		// 主体子分块1
		if(wTop>=$('.mOne .top').offset().top-120 && wTop<$('.mOne .bottom').offset().top){
			$('.mOne .top .qute ul li').children().not('img').css({'opacity':'1','transition':'all 1s linear'})
		}
		if(wTop>=$('.mOne .bottom').offset().top-200 && wTop<$('.mTwo .top').offset().top){
			$('.mOne .bottom div').fadeIn(1000);
		}

		// 主体子分块2
		if(wTop>=$('.mTwo .top').offset().top-120 && wTop<$('.mTwo .bottom').offset().top){
			$('.mTwo .top .qute ul li').children().not('img').css({'opacity':'1','transition':'all 1s linear'})
		}
		if(wTop>=$('.mTwo .bottom').offset().top-200 && wTop<$('.mThree .top').offset().top){
			$('.mTwo .bottom div div').slideDown(1000);
		}

		// 主体子分块3
		if(wTop>=$('.mThree .top').offset().top-120 && wTop<$('.mThree .bottom').offset().top){
			$('.mThree .top .qute ul li').children().not('img').css({'opacity':'1','transition':'all 1s linear'})
		}
		if(wTop>=$('.mThree .bottom').offset().top-200 && wTop<$('.mFour .top').offset().top){
			$('.mThree .bottom div').slideDown(1000);
		}

		// 主体子分块4
		if(wTop>=$('.mFour .top').offset().top-120 && wTop<$('.mFour .bottom').offset().top){
			$('.mFour .top .qute ul li').children().not('img').css({'opacity':'1','transition':'all 1s linear'})
		}
		if(wTop>=$('.mFour .top').offset().top+520){
			$('.mFour .bottom div').slideDown(1000);
		}

		$('.wrap').on('mousewheel',function(e){
			if(e.deltaY<0){
				$('.ban').slideUp(500)
				$('.banner').slideUp(500)
				$('.nav').slideDown(500)
			}
		})

		// 导航栏
		if(wTop>740){
			$('.nav').css({'background':'#fff','box-shadow':'0 2px 2px #eee'});	
			$('.nav a').css('color','#282828');
			$('.nav .one').hide();
			$('.nav .two').show();

		}else{
			$('.nav').css({'background':'transparent','box-shadow':'0 2px 2px transparent'});
			$('.nav a').css('color','#fff');
			$('.nav .two').hide();
			$('.nav .one').show();
		}		
	})

	// 主体所有子分块头部hover
	$('.main .top .qute ul').hover(function(){
		$(this).children('li').eq(1).fadeIn(500).siblings().slideUp(500)
		},function(){
			$(this).children('li').eq(0).slideDown(500).siblings().fadeOut(500)
		})
})