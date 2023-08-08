// Main_section2_tech 시작
let techwrapperSwiper; 
techwrapperSwiper = new Swiper(".tech2-slide", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: "#tech_tab .slide_btn.next",
        prevEl: "#tech_tab .slide_btn.prev",
    },

    //
});
techwrapperSwiper.on("slideChange", function () {


   activeteb(techwrapperSwiper.realIndex);
});

let techMenu = $(".section2 .tec_tab_list > a"); //탭메뉴
let techBar = $(".section2 .tech_bar");

let techPrevBtn = $("#tech_tab .prev");
let techNextBtn = $("#tech_tab .next");

let tectebSlide = $(".tech2-slide .swiper-wrapper > div"); //탭 슬라이드

let techMenuIdx = techMenu.length;
let tectebIndex = tectebSlide.length;



techMenu.on("click", function (e) {
    e.preventDefault();
    //let teBox = techContent.index();
    let activeIndex = $(this).index();

    activeteb(activeIndex);

    techwrapperSwiper.slideTo(activeIndex);

    $(this).addClass("active").siblings().removeClass("active");

});

function activeteb(idx) {
    let techBarTop = techMenu.eq(idx).position().top;
    techBar.css({ top: techBarTop });
}

// Main_section2_tech 종료


// Main_section3_esg
$('.esg_hover').css({display: 'none'})

$('.esg_list_exp').hover(
    function(){
        esgNumber();
        if($(window).innerWidth() > 768){ 
            $('.esg').css({height: '100vh'});
            $(this).stop().animate({width: '52vw'});
            $(this).find('.esg_hover').css({display:'inline-block'});
            $('.esg_exp').stop().animate({width: '13vw'});
            $('.esg_exp').addClass('align-items-center');
            $('.esg_title').css({writingMode: 'vertical-lr'});
            $('.esg_desc').css({display: 'none'});
            numberFormat($('.esg_hover span'));
        }else{
            $('.esg').css({height: '150vh'});
            $(this).css({width: '100vw'});
            $(this).find('.esg_hover').css({display:'inline-block'});
            $('.esg_hover p').stop().animate({width: '40vw'});
            $('.esg_hover span').stop().animate({width: '40vw'});
            $('.esg_desc').css({display: 'none'});
        }
    },
    function(){
        if($(window).innerWidth() > 768){
            $(this).stop().animate({width: '17.3vw'})
            $(this).find('.esg_hover').css({display:'none'});
            $('.esg_exp').stop().animate({width: '47vw'});
            $('.esg_exp').removeClass('align-items-center');
            $('.esg_title').css({writingMode: ''})
            $('.esg_desc').css({display: 'block'});
        }else{
            $('.esg_desc').css({width: '100vw', display: 'inline-block'});
            $('.esg_hover').css({display: 'none'});
        }
    }
)
// $(window).trigger('resize');

let esgNumber = function(){
    let esgHover = $('.esg_hover > div');
    esgHover.each(function(){
        let changeNum = $(this).find('span')
        let targetNum = changeNum.attr('data-num');
    
        $({num:0}).animate({num:targetNum},{
            duration: 2500,
            progress: function(){
                let change = numberFormat(Math.ceil(this.num));
                changeNum.text(change);
            }
        })
    })
}

function numberFormat(inputNumber) {
   return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Main_section4_tech 시작
let sec4_itemContainer = $('.section4 .slide_wrap');
let sec4_item = $('.section4 .slide_wrap li');
let sec4OST = $('.section4').offset().top;


$(window).scroll(function(){
  let SCT = $(this).scrollTop() - sec4OST;
  sec4_item.each(function(){
    let $this = $(this);
    let itemPosTop = $(this).position().top-500;
    if(SCT > itemPosTop){
      $this.addClass('active');
    }
  });
  console.log(SCT);
});
$(window).trigger('scroll');
// Main_section4_tech 종료
