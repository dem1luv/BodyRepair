"use strict";

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
  		let item = $(ibg[i]);
  		let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
});

// ajax
$(document).ready(function () {
	$(".request__form,.consult__form,.popup__form").submit(function () {
		$.ajax({
			type: "POST",
			url: 'feedback.php',
			data: $(this).serialize(),
			success: function (data) {
				// when success
			},
			error: function (jqXHR, text, error) {
				// when error
			}
		});
	$.fancybox.close($("#popup-back-call,#popup-fast-back-call"));
	$.fancybox.open($("#popup-thanks"));
	return false;
	});
});

// inputmask
$(document).ready(function(){
	$(".request__input-tel,.consult__input-tel,.popup__input-tel").inputmask({"mask": "+7 (999) 999-99-99"})
});

//anchors
$(document).ready(function(){
    $("a[href^=#]").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});