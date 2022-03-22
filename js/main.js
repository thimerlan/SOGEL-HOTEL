$(document).ready(function(){
	$('.burger').click(function(event){
		$('.burger, .menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});