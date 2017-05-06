$(document).ready(function(){
	$('#toggle_menu').click(function(){
		if($("i.fa-bars").attr('style','display:block')){

			$("i.fa-bars").attr('style','display:none');
			$("i.fa-times").attr('style','display:block');
		} else {
			$("i.fa-bars").attr('style','display:block');
			$("i.fa-times").attr('style','display:none');
		};	
	});

});