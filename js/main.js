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