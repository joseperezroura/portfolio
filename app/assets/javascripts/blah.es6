$(document).on("turbolinks:load", function () {
	console.log("fuck you")
	$(".js-jose").on("click", ScrollToPortfolio);


$(".js-well").mouseover(function() {
    $(this).animate({ marginTop: 100 });
    $(this).animate({ marginTop: -100 });
})



});


function ScrollToPortfolio(x){
	x.preventDefault();
	window.scroll(0, 480)
}

