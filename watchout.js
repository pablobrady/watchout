// start slingin' some d3 here.

// var data = [random, random, random, random, random, random, random, random];

// var random = ( Math.random() )*800
var collisions = 0;
var currentScore = 0;
var highScore = 0;
setInterval(function(){ 
	currentScore++;
	d3.select(".current span").text(currentScore);
	highScore = Math.max(currentScore, highScore);
	d3.select(".high span").text(highScore);
}, 100);

var dataArray = [ [100,400],[200,400],[300,400],[400,400],[500,400],[600,400],
[100,300],[200,300],[300,300],[400,300],[500,300],[600,300] ];
// appending svg container to gameboard, and setting svg's dimensions
var svg = d3.select(".gameboard")
		.append("svg")
    .attr("height", 800)
    .attr("width", 800);

d3.select(".gameboard")
				.on("mousemove", function() {
          d3.select(".falcon").attr("x", d3.event.x - 200/2);
          d3.select(".falcon").attr("y", d3.event.y - 375/2);
        } );

// what does the parameter for selectAll do?

var drag = d3.behavior.drag()  
             // .on('dragstart', function() { this.style('fill', 'red'); })
             .on('drag', function() { 
             	falcon.attr("x", d3.event.x - 200/2); 
             	falcon.attr("y", d3.event.y - 200/2); 
             } );
             // .on('dragend', function() { this.style('fill', 'black'); });

var falcon = d3.select("svg").selectAll()
		.data([1])
		.enter()
		.append("image")
		.attr("class", "falcon")
		.attr("xlink:href", "falcon.png")
		.attr("width", 200)
		.attr("height", 200)
		.attr("x", "400")
		.attr("y", "400")
		.call(drag);

var explode = function(n) {
	console.log("explode");
	if (n > 9){
		return;
	}

	d3.select("svg").selectAll()
		.data([1])
		.enter()
		.append("image")
		.attr("xlink:href", "resources/explode" + n + ".png")
		.attr("width", 150)
		.attr("height", 150)
		.attr("x", d3.event.x - 40)
		.attr("y", d3.event.y - 130)

	window.setTimeOut(function(){
		explode(n+1);
	}, 100)


};

//	selects svg container, then selects all images
var aRock = d3.select("svg").selectAll()
		.data(dataArray)
		// creates nodes for nodeless data:
		.enter()
		// appends image nodes to current selection:
		.append("image")
		// sets attributes for image nodes:
		.attr("xlink:href", "asteroid.png")
		.attr("width", 50)
		.attr("height", 50)
		.attr("class", "asteroids")
		.attr("x", function(d) {
			return d[0];
		})
		.attr("y", function(d) {
			return d[1];
		}).on( 'mouseover', function() {
          // select element in current context
          d3.select(".gameboard").style("background-color", "red");
					currentScore = 0;
					collisions++;
					d3.select(".collisions span").text(collisions);

					// explode(1);

        } ).on( 'mouseout', function() {
        		d3.select(".gameboard").style("background-color", "#000");
        });


var update = function() {

	d3.select("svg").selectAll(".asteroids")
		// .data(positions)
		// creates nodes for nodeless data:
		// .enter()
		.transition().duration(1000)
		.attr("x", function(){
			x = Math.random()*750;
			return x;
		})
		.attr("y", function(){
			y = Math.random()*750;
			return y;
		})

};

var timer = setInterval(update, 1500);

