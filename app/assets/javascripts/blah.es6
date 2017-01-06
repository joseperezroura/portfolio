$(document).on("turbolinks:load", function () {
	console.log("fuck you")
	$(".js-jose").on("click", ScrollToPortfolio);
});


function ScrollToPortfolio(x){
	x.preventDefault();
	window.scroll(0, 420)
}

