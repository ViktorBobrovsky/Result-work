$(document).ready(function(){ 

	$('div.bgParallax').each(function(){
	 var $obj = $(this); 


	$(window).scroll(function() { 
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
		var bgpos = '50% '+ yPos + 'px'; 
		$obj.css('background-position', bgpos );
 		});	
	});	

});

//Read more: http://mrbool.com/how-to-create-parallax-effect-with-css-and-jquery/27274#ixzz4dv7ia8gV