// start slingin' some d3 here.

// var data = [random, random, random, random, random, random, random, random];

// var random = ( Math.random() )*800

// appending svg container to gameboard, and setting svg's dimensions
var svg = d3.select(".gameboard")
		.append("svg")
    .attr("height", 800)
    .attr("width", 800);

//	selects svg container, then selects all images
var aRock = d3.select("svg").selectAll("image")
		.data([ [100,400],[200,400],[300,400],[400,400],[500,400],[600,400] ])
		// creates nodes for nodeless data:
		.enter()
		// appends image nodes to current selection:
		.append("image")
		// sets attributes for image nodes:
		.attr("xlink:href", "asteroid.png")
		.attr("width", 50)
		.attr("height", 50)
		.attr("x", function(d) {
			console.log(d);
			return d[0];
		})
		.attr("y", function(d) {
			return d[1];
		})

// var aRock = d3.selectAll("svg")
// 		.data([50,150,200,250], function(data, b){ return b; })
// 		.append("image")
// 		.attr("xlink:href", "asteroid.png")
// 		.attr("width", 75)
// 		.attr("height", 75)
// 		.attr("x", Math.random()*500)
// 		.attr("y", Math.random()*500)
// 		.transition().duration(1000)
// 		.attr("x", Math.random()*500)
// 		.attr("y", Math.random()*500)


var update = function() {

	// var positions = [];
	// for (var i=0; i<6; i++){
	// 	var t = [];
	// 	var rx = Math.floor(Math.random() * 600);
	// 	var ry = Math.floor(Math.random() * 600);
	// 	t.push(rx);
	// 	t.push(ry);
	// 	positions.push(t);
	// }
	// console.log(" positions = ", positions);

	// var genRandom = function(){
	// 	var result = Math.random()*600;
	// 	return result;
	// }

	d3.select("svg").selectAll("image")
		// .data(positions)
		// creates nodes for nodeless data:
		// .enter()
		.transition().duration(1000)
		.attr("x", function(){
			x = Math.random()*600;
			return x;
		})
		.attr("y", function(){
			y = Math.random()*600;
			return y;
		})


// 		// d3.select("svg")
// 		// 	.data([100, 200])
// 		// 	.enter()
// 		// 	.append()


//   // DATA JOIN
//   // Join new data with old elements, if any.
//   var image = svg.selectAll("image")
//       .data(data, function(d) { return d; });

//   // UPDATE
//   // Update old elements as needed.
//   image.attr("x", "update");

//   // ENTER
//   // Create new elements as needed.
//   image.enter().append("image")
//       .attr("x", "enter")
//       .attr("y", "enter")
//       .text(function(d) { return d; });

// //   // ENTER + UPDATE
// //   // Appending to the enter selection expands the update selection to include
// //   // entering elements; so, operations on the update selection after appending to
// //   // the enter selection will apply to both entering and updating nodes.
// //   text.attr("x", function(d, i) { return i * 32; })

// //   // EXIT
// //   // Remove old elements as needed.
// //   text.exit().remove();
// // }

// // // The initial display.
// // update(alphabet);

	// Grab a random sample of letters from the alphabet, in alphabetical order.

// // // Shuffles the input array.
// // function shuffle(array) {
// //   var m = array.length, t, i;
// //   while (m) {
// //     i = Math.floor(Math.random() * m--);
// //     t = array[m], array[m] = array[i], array[i] = t;
// //   }
// //   return array;
};

var timer = setInterval(update, 1500);

