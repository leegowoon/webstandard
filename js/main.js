$('.tit .btn').click(function(ev){
  ev.preventDefault();
    /* $('.nav').toggle(); */
    /* $('.nav').fadeToggle(); */
    $('.nav').slideToggle();
    $(this).toggleClass("on");
});


$('.ban').slick({
  infinite: true,
  slidesToShow: 3, //한 화면에 보이는 갯수
  slidesToScroll: 1, //버튼을 클릭하면 넘어가는 갯수
  dots:true,
  autoplay:true
});

// slick > Initialize your slider
$('.gallery_img').slick({
  arrows: false
});

$('.gallery_btn .play').click(function(){
  $('.gallery_img').slick('slickPlay'); //slick_github > Methods >> slickPlay
})

$('.gallery_btn .pause').click(function(){
  $('.gallery_img').slick('slickPause'); //slick_github > Methods >> slickPause
})

$('.gallery_btn .prev').click(function(){
  $('.gallery_img').slick('slickPrev'); //slick_github > Methods >> slickPrev
})

$('.gallery_btn .next').click(function(){
  $('.gallery_img').slick('slickNext'); //slick_github > Methods >> slickNext
})

// slick > github
// arrow : 기본값이 ture
// boolean값이란 true or false로 나온다는 뜻.

//탭메뉴
//.next() >> 바로 밑 요소(바로아래동생)을 부르는 것
//.parent() >> 부모요소를 부르는 것
//.siblings() >> 나를 제외한 형제들
//.find() >> 하위요소(내 안에 있는 요소들)

let tab_list=$('.tab_menu'); // >> 공지사항 부분

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();


$('.tab_menu>ul>li>a').click(function(ev){  // >> 공지사항1, 공지사항2, 공지사항3
  ev.preventDefault();
  let $this = $(this); // 변수를 만들 때 사용할 수 있는 특수문자 >> $,_
  //console.log($this)
  $this.next('ul').show(); // >> ul을 굳이 적지않아도 바로 밑 하위요소를 부른다.
  $this.parent('li').siblings('li').find('ul').hide();


  $this.parent('li').addClass('active');
  $this.parent('li').siblings('li').removeClass('active');
  
});

// lightGallery
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
  
});


// layer popup
$('.layer').click(function(ev){
  ev.preventDefault(); // 새로고침 막기
  //$('#layer').show();
  $('#layer').fadeIn();
})

$('#layer .close').click(function(ev){
  ev.preventDefault(); // 새로고침 막기
  //$('#layer').show();
  $('#layer').fadeOut();
})


// window창 열기
$('.window').click(function(ev){
  ev.preventDefault(); // 위로 튕겨가는 것을 방지
  window.open("popup.html", "popup", "top=500,left=500,width=900,height=590");
})