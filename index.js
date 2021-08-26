const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const icon = new Icon(50, 50);

document.querySelector('.gameover').style.display = 'none';

window.onload = ()=> {
	console.log('page loaded');
	start()
};

function updateCanvas() {
	icon.draw(); 
	requestAnimationFrame(updateCanvas);
	
}

updateCanvas();

canvas.addEventListener("click", (e) => {
	const coord = {
		x: e.clientX,
		y: e.clientY,
	};

	if (checkClickIcon(coord)) {
		console.log("x", e.clientX);
		console.log("y", e.clientY);
		console.log("clicking icon");
		score++;
		scoreElement.innerHTML = score;
	}
	// newQuote();
});

function checkClickIcon(mouseCoordinates) {
	/*  console.log(icon); */
	return !(
		mouseCoordinates.x > icon.right() ||
		mouseCoordinates.x < icon.left() ||
		mouseCoordinates.y > icon.bottom() ||
		mouseCoordinates.y < icon.top()
	);
}

const scoreElement = document.getElementById("score");

icon.onclick = function () {
	score++;
	scoreElement.innerHTML = score;
	console.log(score);
};


//MAKING ELAPSED TIME
let startTime;
let endTime;
let duration;

function start() {

  startTime = new Date();
  console.log(startTime);
};

function end() {
  endTime = new Date();
  const timeDiff = endTime - startTime; //in ms
  // strip the ms
  const secondsDiff= timeDiff / 1000;
  const minutesDiff= timeDiff / 60000;

  // get seconds 
  const seconds = Math.round(secondsDiff);
  const minutes = Math.round(minutesDiff);
  console.log(seconds + " seconds");
  duration = `${minutes}M : ${seconds}S`;

  document.querySelector("#total-time").innerHTML = `${duration}`;
}

