$(document).ready(function(){
	$(document).find('#contactSend').click(function(){
		var $userName = $('input[name=name]').val();
		var $userEmail = $('input[name=email]').val();
		var $userMessage = $('textarea[name=message]').val();

		var regExp = /@/g;
		var dogFind = regExp.test($userEmail);

		if ($userName && dogFind  && $userMessage) {
			$.ajax({
				url: '/contact',
				method: 'POST',
				data: {
					"name": $userName,
					"email": $userEmail,
					"message": $userMessage
				}
			}).then(function(){
				console.log(res);
			});
		} else if(dogFind == false && $userName && $userMessage ){
			alert("Please enter correct Email!");
			$('input[name=email]').removeAttr('placeholder');
		} else if($userName == "" || $userName == null || $userEmail == "" || $userEmail == null || $userMessage=="" || $userMessage== null){
			alert("Please fill all filds")
		};

	});


});


