$(document).ready(function(){

  $.ajax({
    url: '/personal',
    method: 'GET'
  }).then(function(personalData){

      $(document).find("div.photoes_place a div").click(function(event) {
          var photoSource = $(event.target).attr("class");
          console.log(photoSource);
          var $cardTemplate = $("#card_template").clone(); 

        personalData.forEach(function(obj,index){
          if(photoSource == obj.photo){
                     
            $cardTemplate.find("[data-personal-photo]").attr("class", "photo_in_card" + " " + photoSource);
            $cardTemplate.find("[data-personal-name]").text(obj.name);
            $cardTemplate.find("[data-personal-bio]").text(obj.bio);
          };    
        });

        $("#card_photo").attr("style", "display:inline-block");            
        $("div.photo_viewer").fadeIn(300);
        $("div.photo_viewer").attr("style","display:block");
        $('html').css({
          overflow: 'hidden',
          height: '100%',
          width: '99.4%',
          transition: 'width 2s'
        });            
      });
      // console.log("There is" + $("#card_template h1").text())

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

});



    

