/*select js*/
$(document).ready(function() {
    $('.arrow').click(function(){
		$('.aList').fadeIn('normal');			  
	});

	$('.langSelect .aList').mouseleave(function(){     
		$(this).fadeOut('fast');			  
	});
    
    
    
    
	/*tab키 이동시 처리 방법입니다.*/
	  $('.arrow').bind('focus', function () {        
              $('.aList').show();	
       });
       $('.aList li:last').find('a').bind('blur', function () {        
              $('.aList').hide();
       });  
});

