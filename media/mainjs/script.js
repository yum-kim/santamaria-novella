$(document).ready(function() {
        
        //aboutus tab 클릭시 컨텐츠 변경 스크립트  

            $('.rightArrow,.conceptBtn').click(function() {
                $('.aboutUsbox').fadeOut();
                $('.conceptBox').show();
            });

            $('.aboutusBtn').click(function() {
                $('.conceptBox').hide()
                $('.aboutUsbox').fadeIn();
            });

        
        //타블렛용 컨셉영역 스와이프 슬라이더 js 
        
        
            let swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 30,
                stretch: -80,
                depth: 200,
                modifier: 1,
                slideShadows: true,

            },
            loop: true,
            pagination: {
                el: 'swiper-pagination'
            }
        });
       
                
        
    //pc 상품영역 텍스트 애니매이션
            
        var line1 = $('.line1');
        var line2 = $('.line2');

        var line1Spans = $('.line1 > p');
        var line2Spans = $('.line2 > p');

        // Set tweens
        TweenMax.set([line1, line2], {
            x: -15
        })
        TweenMax.set([line1Spans, line2Spans], {
            alpha: 0
        })


        // Tween values
        var tl = new TimelineMax({
            repeat: -1
        });

        tl.add(
            TweenMax.to(line1, .75, {
                x: 0,
            }),
            "start"
        )

        tl.add(
            TweenMax.to(line2, .75, {
                x: 0,
            }),
            "start+=0.8"
        )

        tl.add(
            TweenMax.staggerTo(line1Spans, .5, {
                alpha: 1,
            }, .05),
            "start"
        )

        tl.add(
            TweenMax.staggerTo(line2Spans, .5, {
                alpha: 0.3,
            }, .05),
            "start+=0.8"
        )
    
    
    
    //모바일용 뉴스레터 부분 버튼 클릭시 메일폼 쇼
    
            $('.inputBoxbtn a').click(function(){
                $('.inputBox').toggle('slow');
            });
                
    
  });

//상품 카테고리 탭메뉴 클릭된 상태의 경우 class 부여

        $(document).ready(function () {
            $(".categoryTabmenu li").each(function () {
                $(this).click(function () {
                    $(this).addClass("selected");                      
                    //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
                    $(this).siblings().removeClass("selected");  
                    //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
                });
            });
        });






