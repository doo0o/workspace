const a = 5 ; // 변하지 않는 값
const b = "2" ;
console.log(a + 1);
console.log(a * 1);
console.log(a / 1);


$(function() {
    /* nav */
    var planNav = $('div.planNavDeal'), navLayer = planNav.find('.navLayer');
    planNav.css("height","74px");
    $(window).on('scroll.planNavEvent',function(){ //스크롤시 메뉴고정
        var planNavY = planNav.offset().top;
        ($(window).scrollTop() >= planNavY) ? navLayer.addClass('fixed') : navLayer.removeClass('fixed');
    });
    planNav.find('li').click(function(){
        //navLayer.find('.navImg img').removeClass('on');
        //navLayer.find('.navImg img').eq($(this).index()).addClass('on');
        cfGoPlanningCorner('#'+$(this).attr('li-data'));
        setTimeout(function(){
            $(window).scrollTop($(window).scrollTop() - 74)
        },100);
    });
    
    //코너상품위 네비게이션 클릭시 위에 스크롤 공백
    $("#planNavBar_d > ul > li > a").bind("click", function(){
        setTimeout(function(){
            $(window).scrollTop($(window).scrollTop() - 74)
        },100);
    });
});



$(function () {
    var sw = planSwipers('.plan-68722', {
      options: {
        isResize: false, // 모바일에서 true 로 셋팅하면 plan-vw-resize 클래스를 갖는 이미지에 vw 값을 지정함.
        isLocal: true, // items.area 를 기준으로 페이징 등 요소를 찾도록 함.( default : false )
      },
      items: [
        {
          area: '.plan-swiper-01',
          options: {
            allowTouchMove: false, // 사용자 터치를 비 활성화( 활성화 해도 무관함 )
            parallax: true, // parallax 사용을 활성화
            // effect: 'fade', // 페이드 인/아웃 효과인 경우에는 해당 옵션을 추가함.
            speed: 1200, // 모션 전환 속도
            autoplay: {
              delay: 2000, // 모션 전환 후 대기시간
            },
          },
        },
        {
          area: '.plan-swiper-02',
          options: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
        },
      ],
    });
  });

  $(window).on('load', function () {
    PlanNavigation(document.querySelector('#planNavA')); // 중간에 오는 고정 네비 실행
  });
