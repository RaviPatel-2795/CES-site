$(document).ready(function() {
	$("#owl-image").owlCarousel({

	navigation : false,
	pagination : false,
	autoPlay: 3000,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true,

	// "singleItem:true" is a shortcut for:
	// items : 1, 
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false

	});
});