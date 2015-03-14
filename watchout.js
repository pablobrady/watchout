// start slingin' some d3 here.

// appending svg container to gameboard, and setting svg's dimensions
var svg = d3.select(".gameboard")
		.append("svg")
    .attr("height", 800)
    .attr("width", 800);

// var g = svg.append("g");

// appends image to svg container
var aRock = d3.selectAll("svg")
		.data([50,150,200,250], function(data, b){ return b; })
		.append("image")
		.attr("xlink:href", "asteroid.png")
		.attr("width", 75)
		.attr("height", 75)
		.attr("x", 500)
		.attr("y", 500)

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


function update(data) {


		// d3.select("svg")
		// 	.data([100, 200])
		// 	.enter()
		// 	.append()


//   // DATA JOIN
//   // Join new data with old elements, if any.
//   var asteroids = svg.selectAll("svg")
//       .data(data, function(d) { return d; });

//   // UPDATE
//   // Update old elements as needed.
//   text.attr("class", "update");

//   // ENTER
//   // Create new elements as needed.
//   text.enter().append("text")
//       .attr("class", "enter")
//       .attr("dy", ".35em")
//       .text(function(d) { return d; });

//   // ENTER + UPDATE
//   // Appending to the enter selection expands the update selection to include
//   // entering elements; so, operations on the update selection after appending to
//   // the enter selection will apply to both entering and updating nodes.
//   text.attr("x", function(d, i) { return i * 32; })

//   // EXIT
//   // Remove old elements as needed.
//   text.exit().remove();
// }

// // The initial display.
// update(alphabet);

// // Grab a random sample of letters from the alphabet, in alphabetical order.
// setInterval(function() {
//   update(shuffle(alphabet)
//       .slice(0, Math.floor(Math.random() * 26))
//       .sort());
// }, 1500);

// // Shuffles the input array.
// function shuffle(array) {
//   var m = array.length, t, i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m], array[m] = array[i], array[i] = t;
//   }
//   return array;
}

