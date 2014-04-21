/**
 * @author Winni Zhou
 */

/* I am going to write the roasted almonds recipe today.
 * program outline
 * 1. load jQuery (JQuery, Google javascript, then my custom scripts)
 * 2. add new div for buttons, images and annotations
 * 3. add document ready
 * 4. create function activiated on document ready
 * 5. console log in that function
 * 6. load image and button
 * 7. add "disabled" when I am at the first and the last image
 */

/* This is an array of all our images in order. */

var steps = [
{"images": "0.jpg","text":"Rosemary Chipotle Roasted Almonds Directions"},
{"images": "1.jpg","text":"Preheat the oven to 350 degrees F. Brush a sheet pan generously with vegetable oil."},
{"images": "2.jpg","text":"Combine the cashews, walnuts, pecans, almonds, 2 tablespoons of the vegetable oil, the maple syrup, brown sugar, orange juice and chipotle powder on the sheet pan; toss to coat. Add 2 tablespoons of the rosemary and 2 teaspoons of salt and toss again."},
{"images": "3.jpg","text":"Spread the nuts in one layer. Roast for 25 minutes, stirring twice with a large metal spatula, until the nuts are glazed and golden brown. Remove from the oven and sprinkle with 2 more teaspoons of salt and the remaining 2 tablespoons of rosemary."},
{"images": "4.jpg","text":"Taste for seasoning."}
];


/* index of the curent image in our images array. */


var index = 0;

/* set button events here */
function setNav() {
	console.log("setNav");

	$(".button").on("click", function() {
		
		var isNext = $(this).hasClass("next");
		
		if (isNext == true && index != (steps.length - 1)) {
			index = index + 1;
		} else if (isNext == false && index > 0) {
			index = index - 1;
		}
/* as long as there is an image left, show me the next.
 */		
		
	
		if ( index == 0) {
			$(".button.prev").addClass("disabled");
		} else if (index == (steps.length - 1)) {
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		}
/* if I am at the first image, diable the "previous" button.
 * if not I am jump to the next or back to the previous image.
 */

		updateImage();
		});

}

/* change the image here */
function updateImage() {
	$(".direction").html(steps[index].text);
	
	$(".image-holder").html("<img src='images/" + steps[index].images + "'/>");
	

}

/* load the first image into our iamge holder. */

$(document).ready(function() {
	$(".image-holder").html("<img src='images/" + steps[index].images + "'/>");
	$(".button.prev").addClass("disabled");
	setNav();
	$(".direction").html(steps[index].text);
});

console.log(steps);