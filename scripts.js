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

var images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];


/* index of the curent image in our images array. */


var index = 0;

/* set button events here */
function setNav() {
	console.log("setNav");

	$(".button").on("click", function() {
		
		var isNext = $(this).hasClass("next");
		
		if (isNext == true && index != (images.length - 1)) {
			index = index + 1;
		} else if (isNext == false && index > 0) {
			index = index - 1;
		}
/* as long as there is a image left, show me the next.
 */		
		
	
		if ( index == 0) {
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length - 1)) {
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
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");

}

/* load the first image into our iamge holder. */

$(document).ready(function() {
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");
	$(".button.prev").addClass("disabled");
	setNav();
});

console.log(images);