$(document).ready(function() {
    $(".phone").mask("+38 (999) 999-99-99");
  });
// меню-бургер
$(document).ready(function(){
    $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})
})
$(function () {
	let $videoContainer = $('#video'),
		$videoControls = $('.video-control'),
		$video = $('#myVideo')[0];

	$videoControls.click(function () {
		if ($video.paused) {
			$video.play();
			$videoContainer.addClass('video-is-playing');
		} else {
			$video.pause();
			$videoContainer.removeClass('video-is-playing');
			//	возвращаем постер
			$video.load();
		}
	});
});
