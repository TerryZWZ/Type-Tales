// This code will pseudo refresh the game page
$(document).ready(function(){
	$('#youLost').click(function(){
		window.top.location.href='../index.html';
	});	
});