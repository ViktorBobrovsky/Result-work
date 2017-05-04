$(document).ready(function(){
  renderCard();
});

function renderCard(){
  $.ajax({
    url: '/personal',
    method: 'GET'
  }).then(function(personalData){

      $(document).find("div.photoes_place a div").click(function(event) {
          var photoSource = $(event.target).attr("class");
          console.log(photoSource);
          var $cardTemplate = $("#card_template"); 
      

          var filteredObj = personalData.filter(function(obj){
              return obj.photo == photoSource;             
          });             
              $cardTemplate.find("[data-personal-photo]").attr("class", "photo_in_card" + " " +  filteredObj[0].photo);
             
              $cardTemplate.find("[data-personal-name]").html(filteredObj[0].name);
              console.log( $cardTemplate.find("[data-personal-name]").text());
              $cardTemplate.find("[data-personal-bio]").html(filteredObj[0].bio);
              console.log( $cardTemplate.find("[data-personal-bio]").text());
            
        

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
};


    

