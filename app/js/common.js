$(function() {

	$(".pag__item").on('click', function () {
		$(".pag__item").removeClass('active');
		$(this).toggleClass('active');
	});

	var btn = document.querySelector('.btn__top');
	btn.onmousemove = function (e) {
		var x = e.pageX - btn.offsetLeft;
		var y = e.pageY - btn.offsetTop;
		btn.style.setProperty('--x', x + 'px');
		btn.style.setProperty('--y', y + 'px');
	};

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

});
