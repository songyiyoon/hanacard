//slick
$(document).ready(function(){
    $('.eb_slider_list').slick({
      //setting-name: setting-value 세미콜론 찍으면 안돼(;)
      arrows:false,
      dots:true,
      autoplay:true,
      pauseOnHover:false,
      fade:true
    });
  });

  // //정지/재생버튼
  // 버튼.click(); 버튼을 클릭하면 어떤일이 일어난다.
  // 버튼.click(function(){}); 어떤일은 함수 function(){}
  // 버튼.hasClass('active')버튼이 active라는 class를 가지고 있는가 가지고 잇으면 true 가지고있지않다면 false




  $('.event_box2 .page_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box2 .page_act').hasClass('on')){
      $('.event_box2 .page_act').removeClass('on')
      $('.eb_slider_list').slick('slickPause');

    }
  })

  $('.event_box2 .page_act .btn_play').click(function(e){//e는 event를 막는다
    e.preventDefault();
    if(!$('.event_box2 .page_act').hasClass('on')){
        //on을 가지고 잇지 않아야 true
        //! = not을 의미 부정 --아닐때 true가 된다

        $('.event_box2 .page_act').addClass('on')//on 추가
        $('.eb_slider_list').slick('slickPlay');

    }
  })

    let card=$('.card')

    card.slick({
      // setting-name: setting-value
      arrows:false,
      dots:true,
      autoplay:true,
      pauseOnHover:false,
      fade:true
    });
    $('.event_box3 .page_act .btn_stop').click(function(e){
      e.preventDefault();
      //.hasClass('on')를 가지고 있으면 true 가지고있지 않으면 flase
      if($('.event_box3 .page_act').hasClass('on'))//true가 나온다
        {$('.event_box3 .page_act').removeClass('on');
        card.slick('slickPause');//변수로 선언했을때는 변수로 넣어줘야함! 
        }
    })

    $('.event_box3 .page_act .btn_play').click(function(e){
     // e.preventDefault();기본값을 막아라! preventDefault = 내장함수라고 한다. 함수를 java script나 jQurey가 가지고 있어서 우리는 함수를 직접만드는 것이 아니라 이미있는 함수를 가져다 쓰는것

     e.preventDefault();
     if(!$('.event_box3 .page_act').hasClass('on'))//on을 가지고있지 않아야 된다 false의 반대가 되야 된다
     {$('.event_box3 .page_act').addClass('on')
     card.slick('slickPlay');
     }   

    })
    
//life버튼

let tab =$('.life_menu ul li');
let style=$('.life_style ul li');


tab.mouseover(function(){
   let tartget=$(this); //버튼 4개중에서 사용자가 마우스를 올린 버튼 그것
   let index=tartget.index()//사용자가 마우스를 올린 버튼 그것의 index번호를 추출한다.
   // console.log(index)
   style.css({opacity:0})//1)모두안보이기
   style.eq(index).css({opacity:1})//2)사용자가 마우스를 올린 버튼의 index번호에 해당하는 style의 ul li요소를 보이게 한다.
  })
