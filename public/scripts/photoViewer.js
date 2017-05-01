$(document).ready(function(){
  renderPersonalData();
});

// function renderPersonalData(){
//   $.ajax({
//     url: '/scrips/personalData.json',
//     method: 'GET'
//   }).then(function(personalData){

//     personalData.forEach(function(obj){
//       var $cardTemplate = $("div.card").clone();
//       $cardTemplate.find([data-personal-photo]).attr("class", "photo_in_card" + " " + photoSource);
//       $cardTemplate.find([data-personal-name]).text(obj.name);
//       $cardTemplate.find([data-personal-bio]).text(obj.bio);
//     })


//   })
// }






$(document).find("div a div").click(function(event) {
    var photoSource = $(event.target).attr("class");

    $("#card_photo").attr("class", "photo_in_card" + " " + photoSource);

    $("#card_photo").attr("style", "display:inline-block");
    
    $("div.photo_viewer").fadeIn(300);
    $("div.photo_viewer").attr("style","display:block");
    $('html').css({
   		 overflow: 'hidden',
   		 height: '100%',
   		 width: '99.4%',
   		 transition: 'width 2s'
	});


    $("div.photo_viewer").click(function(){
    	$("div.photo_viewer").fadeOut(300);
    	// $("div.photo_viewer").attr("style","display:none");
    	$('html').css({
  			overflow: 'auto',
   			height: 'auto',
   			width: 'auto',
   			transition: 'width 2s'
		});
    });  
});