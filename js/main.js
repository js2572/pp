jQuery(document).ready(function(){
    
    
    //메뉴 버튼 클릭하면 주메뉴(nav) 나옴
    $('.menu_btn').click(function(){
        //nav영역이 보여진 후에 function다음의 명령어 실행 (메뉴 페이드인)
        $('nav').show(function(){
            $('nav ul li').each(function(){
                var indexNum=$(this).index();
                $(this).delay(indexNum*300).fadeIn();
            });
        });
    });
    //메뉴의 닫기 버튼을 클릭하면 주메뉴 안보임
    $('nav .close').click(function(){
        $('nav').hide();
    });
    
    //주메뉴를 클릭하면 해당 section으로 이동
    $('nav ul li a').click(function(){
        $('nav').hide();
        var menu_attr=$(this).attr('href');
        $('html,body').animate({
            scrollTop:$(menu_attr).offset().top
        });
    });
    
    //스킬바
    $(window).scroll(function(){
        //화면 맨위쪽 위치 : 0을 변수에 저장
        var winTop=$(window).scrollTop();
        //화면 아래쪽 위치를 변수에 저장
        var winBottom=winTop+$(window).height();
        
        //두번째 section의 시작 위치값을 변수에 저장
        var secTop=$('.box').offset().top+100;
        var secBottom=secTop+$('.box').height();
        
        //top < wBottom && bottom > wTop
        if(secTop<winBottom && secBottom>winTop){
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').addClass('active');
	        });
        }else{
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').removeClass('active');
	        });
        }
            
        
    });
    
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1000);
	});
    var swiper = new Swiper('.swiper-container', {
        loop: true, 
        autoplay :{
            delay:5000
        },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    //팝업갤러리(lightbox)
    var $gallery = new SimpleLightbox('.small-demo a', {});
    
    //음표 3개 애니메이션
    $('.intro .ani').hide();
    var star=setInterval(starfn, 3000);
    function starfn(){
        $('.intro .ani').each(function(){
            var starNum=$(this).index();
            $(this).delay(starNum*300).fadeIn().fadeOut();
        });
    }
    
});

