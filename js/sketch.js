var points = []
var mult;


var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

// let font,
	// fontsize = 132;

// function preload() {
	// Ensure the .ttf or .otf font stored in the assets directory
	// is loaded before setup() and draw() are called
	// font = loadFont("../assets/Kingthings Xander.ttf");
// }

function fWidth(i) {
	return width / i;
}
function fHeight(i) {
	return height / i;
}

// function typo() {
	// text('word', fWidth(2), fHeight(2));
// }

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 0);
	angleMode(DEGREES);
	noiseDetail(1);

	// textFont(font);
	// textSize(fontsize);
	// textAlign(CENTER, CENTER);



	var density = 120;
	var space = width / density;


	for (var x = 0; x < width; x += space) {
		for (var y = 0; y < height; y += space) {
			var p = createVector(x + random(-10, 10), y + random(-10, 10));
			points.push(p);
		}
	};

	shuffle(points, true);


	r1 = random(255);
	r2 = random(255);
	g1 = random(255);
	g2 = random(255);
	b1 = random(255);
	b2 = random(255);

	mult = random(0.002, 0.001);

}


function draw() {

	noStroke();

	if (frameCount * 4 <= points.length) {
		var max = frameCount * 4;
	} else {
		var max = points.length;
	}



	for (var i = 0; i < max; i++) {

		var r = map(points[i].x, 0, width, r1, b2);
		var g = map(points[i].y, 0, height, g1, r2);
		var b = map(points[i].x, 0, width, b1, g2);
		// var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 350, 400, 0);


		fill(r, g, b, alpha);

		var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 2, 0, 11565);

		points[i].add(createVector(cos(angle), sin(angle)));

		if (dist(fWidth(2), fHeight(2), points[i].x, points[i].y) < 350) {
		// -> push ellipse inside to mask
		}
		ellipse(points[i].x, points[i].y, 1.5);
	}
}

// function mouseClicked() {
	// saveCanvas("flowfield", "png")
// }