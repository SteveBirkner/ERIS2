//Validation for login form
function loginVal() {
	return true;
}

$(document).ready(function() {
	$('#signupLink').click(function() {
		var pop = document.getElementById("mobilePop");
		pop.style.visibility = 'visible';
	});
	$('.okButton').click(function() {
		var pop = document.getElementById("mobilePop");
		pop.style.visibility = 'hidden';
	});
});
