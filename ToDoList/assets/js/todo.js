$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(event) {
	// console.log(event);
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	// console.log(event);	
	if(event.which === 13) {
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + $(this).val() + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(500);
});