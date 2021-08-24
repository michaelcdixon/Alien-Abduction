//SCORE
let score = 0;
//PRICE FOR UPGRADES
//ABDUCTION
let abductionCost = 10;
let abduction = 0;
//DRONES
let droneCost = 50;
let drones = 0;
//PROBING
let probingCost = 100;
let probing = 0;
//COWS
let cowCost = 250;
let cow = 0;
//CLONING
let cloningCost = 500;
let clone = 0;
//MODIFY
let modifyCost = 1000;
let modify = 0;
//ASSIMILATE
let assimilateCost = 5000;
let assimilation = 0;
//PORTAL
let portalCost = 10000;
let portals = 0;
//COLONIZE
let colonizeCost = 50000;
let colonization = 0;
//HARVEST
let harvestCost = 100000;
let harvests = 0;

//MAKING ABDUCTION BUTTON WORK
function buyAbduction() {
	if (score >= abductionCost) {
		score = score - abductionCost;
		abduction = abduction + 1;
		abductionCost = Math.round(abductionCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("abductionCost").innerHTML = abductionCost;
		document.getElementById("abduction").innerHTML = abduction;
	}
}

//MAKING DRONES BUTTON WORK
function buyDrones() {
	if (score >= droneCost) {
		score = score - droneCost;
		drones = drones + 1;
		droneCost = Math.round(droneCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("droneCost").innerHTML = droneCost;
		document.getElementById("drone").innerHTML = drones;
	}
}

//MAKING PROBES BUTTON
function buyProbing() {
	if (score >= probingCost) {
		score = score - probingCost;
		probing = probing + 1;
		probingCost = Math.round(probingCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("probingCost").innerHTML = probingCost;
		document.getElementById("probing").innerHTML = probing;
	}
}
//MAKING COW BUTTON WORK
function buyCows() {
	if (score >= cowCost) {
		score = score - cowCost;
		cow = cow + 1;
		cowCost = Math.round(cowCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("cowCost").innerHTML = cowCost;
		document.getElementById("cow").innerHTML = cow;
	}
}
//MAKING CLONING BUTTON WORK
function buyCloning() {
	if (score >= cloningCost) {
		score = score - cloningCost;
		clone = clone + 1;
		cloningCost = Math.round(cloningCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("cloneCost").innerHTML = cloningCost;
		document.getElementById("clone").innerHTML = clone;
	}
}
//MAING MODIFY BUTTON WORK
function buyModify() {
	if (score >= modifyCost) {
		score = score - modifyCost;
		modify = modify + 1;
		modifyCost = Math.round(modifyCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("modifyCost").innerHTML = modifyCost;
		document.getElementById("modify").innerHTML = modify;
	}
}
//MAKING ASSIMILATE BUTTON WORK
function buyAssimilate() {
	if (score >= assimilateCost) {
		score = score - assimilateCost;
		assimilation = assimilation + 1;
		assimilateCost = Math.round(assimilateCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("assimilateCost").innerHTML = assimilateCost;
		document.getElementById("assim").innerHTML = assimilation;
	}
}
//MAKING PORTAL BUTTON WORK
function buyPortal() {
	if (score >= portalCost) {
		score = score - portalCost;
		portals = portals + 1;
		portalCost = Math.round(portalCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("portalCost").innerHTML = portalCost;
		document.getElementById("portal").innerHTML = portals;
	}
}
//MAKING COLONIZE BUTTON WORK
function buyColonization() {
	if (score >= colonizeCost) {
		score = score - colonizeCost;
		colonization = colonization + 1;
		colonizeCost = Math.round(colonizeCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("colonizeCost").innerHTML = colonizeCost;
		document.getElementById("colonize").innerHTML = colonization;
	}
}
//MAKING HARVEST BUTTON WORK
function buyHarvest() {
	if (score >= harvestCost) {
		score = score - harvestCost;
		harvests = harvests + 1;
		harvestCost = Math.round(harvestCost * 1.15);
		document.getElementById("score").innerHTML = score;
		document.getElementById("terraformCost").innerHTML = harvestCost;
		document.getElementById("terraform").innerHTML = harvests;
	}
}

//SETTING INCREMENTAL POINTS FOR ABDUCTION
setInterval(function () {
	score = score + abduction;
	score = score + drones * 5;
	score = score + probing * 15;
	score = score + cow * 25;
	score = score + clone * 35;
	score = score + modify * 45;
	score = score + assimilation * 55;
	score = score + portals * 65;
	score = score + colonization * 95;
	score = score + harvests * 200;
	document.getElementById("score").innerHTML = score;
}, 500);
