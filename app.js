$(document).ready(function(){
	$("#container").append("<div class='customProperty'></div>");
	$(".customProperty").append("<button class='generate'>Generate Property</button>");

	var propNum;

	var sqFt;

	var cost;
	
	$("#container").on('click', '.generate', function(){

			propNum = randomNumber(0, 9999);
			sqFt = randomNumber(1000, 9999);
			cost = randomNumber(0, 100);
		
		$(".customProperty").append('<div class="property"></div>');
		var $el = $(".customProperty").children().last();
		
		$el.append("<div class='propertyID'>Property ID: " + propNum + "</div>");
		$el.append("<div class='sqFt'>" + sqFt + " Sq. Ft.</div>");
		$el.append("<div class='costSqFt'>$" + cost + " / Sq. Ft.</div>");
		$el.append("<div class='removeButton'><button class='remove'>Remove</button></div>");
		
		$el.hide()
			.slideDown(300);
	});

	$("#container").on('click', '.remove', function(){
		$(this).parent().parent().slideUp(300, function(){
			$(this).remove();
		});
		
	}); 
});

// Generate random number with min and max specified
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}