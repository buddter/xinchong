jQuery(document).ready(function($) {
	$('.nav-ul>li').hover(function() {
		$(this).children('a').addClass('color-black');
	}, function() {
		$(this).children('a').removeClass('color-black');
	});
	//banner滚动图
	// $('.xst-scroll').height($('.fir img').height());
		function xstScroll(obj){
        var i = 0;
        var time ;
        var len = obj.length;
        // $('.btnDiv>span').css({background:'#fff'});
        // $('.btnDiv>span').eq(i).css({background:'#000'});
        
        var imgChange  =  function(){
        	// $('.btnDiv>span').css({background:'#fff'});
        	//$('.btnDiv>span').eq(i).css({background:'#000'});
            if(i-1<0){
            	obj.eq(len-1).animate({
                opacity: '0.3'},
                500, function() {
                obj.eq(len-1).css({
                    display: 'none'
                });
            	});
            }else{
            	obj.eq(i-1).animate({
                opacity: '0.3'},
                500, function() {
                obj.eq(i-1).css({
                    display: 'none'
                });
            	});
            } 
            obj.eq(i).css({
                    display: 'block'
                });
            obj.eq(i).animate({
                    opacity: '1'},
                    500); 
           
        }
        var imgAuto = function(){
            i++;
            if(i>=obj.length){
                i=0;
            };
            imgChange();
        }
        // var imgLeft = function(){
        //     clearInterval(time);
        //     i--;
        //     if(i<0){
        //         i=obj.length-1;
        //     }
        //     imgChange();
        //     time = setInterval(imgAuto, 3000);
        // }
        // var imgRight = function(){
        //     clearInterval(time);
        //     i++;
        //     if(i>=obj.length){
        //         i=0;
        //     };
        //     imgChange();
        //     time = setInterval(imgAuto, 3000);
        // }
        time = setInterval(imgAuto, 3000);
     	// $('.btnDiv>span').click(function(event) {
     	// 	i = $(this).index();
     	// 	imgChange();
     	// });
    }
   	xstScroll($('.xst-scroll>li'));
   	xstScroll($('.bannerbg>ul>li'));
    //banner滚动图end

	//quality-of-service
	(function(){
		$('.cooking-page').eq(0).css({height:'440px'});
		$('.cooking-page').eq(0).addClass('this-show');
		$('.cooking-page').eq(0).attr("date-show","true");
		$('.cooking-page').on("click",".page-header",function(){
		var _this = $(this).parent(".cooking-page");
		var _that = $('.this-show');
		if(_this.attr("date-show")!="true"){
			_this.animate({
			height: "440px"},
			300, function(){
				_this.addClass('this-show');
				_this.attr("date-show","true");	
			});
			_that.animate({
			height: "36px"},
			300, function() {
				_that.removeClass('this-show');
				_that.removeAttr('date-show');
			});
		}	
	});
	})();
    //quality-of-service end
    // about-us
    $(window).scroll(function(){
        if($(window).scrollTop()>=400){
            $('.backTop').show();
        }else{
            $('.backTop').hide();
        }
    })
    $('.backTop').on('click',function(event) {
        $('html,body').animate({scrollTop:0}, 400)
    });
    $('.tab').on('click','li',function(){
        $('.tab>li').removeClass('checked');
        $('.box>li').removeClass('checked');
        var inx = $(this).index();
        $('.tab>li').eq(inx).addClass('checked');
         $('.box>li').eq(inx).addClass('checked');
    });
	
});