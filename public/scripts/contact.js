$(document).ready(function(){
	$(document).find('#contactSend').click(function(){
		var $userName = $('input[name=name]').val();
		var $userEmail = $('input[name=email]').val();
		var $userMessage = $('input[name=message]').val();

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

	});


});


