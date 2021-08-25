const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const icon = new Icon(50, 50);

function updateCanvas() {
  icon.draw();
  /* saveGame(); */
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

function saveGame() {
  const gameSave = {
    score: score,
    abduction: abduction,
    drones: drones,
    probing: probing,
    cow: cow,
    clone: clone,
    modify: modify,
    assimilation: assimilation,
    portals: portals,
    colonization: colonization,
    harvests: harvests,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
  console.log(gameSave);
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") score = savedGame.score;
  document.getElementById("score").innerHTML = savedGame.score;

  if (typeof savedGame.score !== "undefined") abduction = savedGame.abduction;
  document.getElementById("abduction").innerHTML = savedGame.abduction;
 
  if (typeof savedGame.score !== "undefined") drones = savedGame.drones;
  document.getElementById("drone").innerHTML = savedGame.drones;
  if (typeof savedGame.score !== "undefined") probing = savedGame.probing;

  if (typeof savedGame.score !== "undefined") cow = savedGame.cow;

  if (typeof savedGame.score !== "undefined") clone = savedGame.clone;
  
  if (typeof savedGame.score !== "undefined") modify = savedGame.modify;

  if (typeof savedGame.score !== "undefined")
    assimilation = savedGame.assimilation;
 
  if (typeof savedGame.score !== "undefined") portals = savedGame.portals;
 
  if (typeof savedGame.score !== "undefined")
    colonization = savedGame.colonization;

  if (typeof savedGame.score !== "undefined") harvests = savedGame.harvests;
 /*  console.log(savedGame) */
 
 console.log( savedGame.abduction);
}

setInterval(saveGame, 200);

window.onload = function () {
	loadGame();
	
	
};
